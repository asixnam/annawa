import { readMultipartFormData, readBody, createError } from 'h3'
import pool from '../../utils/db'
import { saveFile } from '../../utils/file-upload'
import { randomUUID } from 'crypto'

export default defineEventHandler(async (event) => {
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

    // Required fields validation
    if (!body.name) {
        throw createError({ statusCode: 400, statusMessage: 'Nama Lengkap wajib diisi' })
    }

    try {
        // Check for duplicate NIK
        if (body.nik) {
            const { rows: existing } = await pool.query('SELECT id FROM students WHERE nik = $1', [body.nik])
            if (existing.length > 0) {
                throw createError({ statusCode: 409, statusMessage: 'NIK sudah terdaftar' })
            }
        }

        // Check for duplicate NISN
        if (body.nis) {
            const { rows: existing } = await pool.query('SELECT id FROM students WHERE nis = $1', [body.nis])
            if (existing.length > 0) {
                throw createError({ statusCode: 409, statusMessage: 'NISN sudah terdaftar' })
            }
        }

        const id = randomUUID()
        const fields = []
        const placeholders = []
        const values = []

        // Database columns matching the ones used in INSERT
        const validFields = [
            'name', 'nis', 'nik', 'unit', 'status',
            'gender', 'birth_place', 'birth_date', 'address',
            'parent_name', 'father_name', 'father_job', 'mother_name', 'mother_job',
            'phone', 'school_origin', 'registration_year', 'child_order'
        ]

        // Add ID
        fields.push('id')
        placeholders.push(`$${values.length + 1}`)
        values.push(id)

        // Add standard fields
        for (const field of validFields) {
            if (body[field] !== undefined) {
                fields.push(field)
                placeholders.push(`$${values.length + 1}`)
                values.push(body[field])
            }
        }

        // Add file fields
        for (const [key, value] of Object.entries(files)) {
            fields.push(key)
            placeholders.push(`$${values.length + 1}`)
            values.push(value)
        }

        // Add creation timestamp if needed (assuming created_at performs default)

        await pool.query(
            `INSERT INTO students (${fields.join(', ')}) VALUES (${placeholders.join(', ')})`,
            values
        )

        return {
            message: 'Student registered successfully',
            id,
            files
        }
    } catch (error: any) {
        console.error('Registration error:', error)
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: error.message || 'Internal Server Error' })
    }
})
