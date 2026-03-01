import { readMultipartFormData, readBody, createError } from 'h3'
import pool from '../../utils/db'
import { saveFile } from '../../utils/file-upload'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    if (!id) throw createError({ statusCode: 400, statusMessage: 'ID is required' })

    const body: Record<string, any> = {}
    const files: Record<string, string> = {}

    const parts = await readMultipartFormData(event)

    if (parts) {
        // Handle Multipart
        for (const part of parts) {
            if (part.filename) {
                const filename = await saveFile(part, 'uploads/students')
                // Map frontend file keys to database columns
                if (part.name === 'ktpAyah') files.file_ktp_ayah = filename
                else if (part.name === 'ktpIbu') files.file_ktp_ibu = filename
                else if (part.name === 'kk') files.file_kk = filename
                else if (part.name === 'akta') files.file_akta = filename
                else if (part.name === 'ijazah') files.file_ijazah = filename
                else if (part.name === 'pasFoto') files.file_foto = filename
            } else {
                body[part.name!] = part.data.toString()
            }
        }
    } else {
        // Handle JSON fallback
        try {
            Object.assign(body, await readBody(event))
        } catch (e) {
            // Ignore error
        }
    }

    if (Object.keys(body).length === 0 && Object.keys(files).length === 0) {
        throw createError({ statusCode: 400, statusMessage: 'No data provided' })
    }

    try {
        const updates = []
        const values = []

        // Database columns matching the ones used in INSERT
        const validFields = [
            'name', 'nis', 'nik', 'unit', 'status',
            'gender', 'birth_place', 'birth_date', 'address',
            'parent_name', 'father_name', 'father_job', 'mother_name', 'mother_job',
            'phone', 'school_origin', 'registration_year', 'child_order',
            // Add legacy/alias fields if necessary, but typically we map incoming 'father_job' to 'father_job' column
        ]

        for (const field of validFields) {
            if (body[field] !== undefined) {
                updates.push(`${field} = ?`)
                values.push(body[field])
            }
        }

        // Add file updates
        for (const [key, value] of Object.entries(files)) {
            updates.push(`${key} = ?`)
            values.push(value)
        }

        if (updates.length > 0) {
            values.push(id)
            await pool.query(`UPDATE students SET ${updates.join(', ')} WHERE id = ?`, values)
        }

        return { message: 'Student updated successfully', files }
    } catch (error: any) {
        throw createError({ statusCode: 500, statusMessage: error.message || 'Internal Server Error' })
    }
})
