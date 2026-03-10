import { readBody, createError } from 'h3'
import pool from '../../utils/db'
import { saveFile } from '../../utils/file-upload'
import Busboy from '@fastify/busboy'

export default defineEventHandler(async (event) => {
    const body: Record<string, any> = {}
    const files: Record<string, string> = {}

    // Check if it's multipart form data
    const contentType = event.node.req.headers['content-type']
    if (contentType?.includes('multipart/form-data')) {
        await new Promise((resolve, reject) => {
            const headers = event.node.req.headers as any
            const busboy = new Busboy({ headers })
            const filePromises: Promise<void>[] = [] // Collect all async save operations

            busboy.on('file', (name, file, filename, encoding, mimetype) => {
                const chunks: Buffer[] = []
                file.on('data', (data) => chunks.push(data))

                const fileProcessingPromise = new Promise<void>((fileResolve) => {
                    file.on('end', async () => {
                        const fileData = Buffer.concat(chunks)
                        if (fileData.length > 0) {
                            try {
                                const savedFilename = await saveFile({
                                    name,
                                    filename: filename as string,
                                    type: mimetype as string,
                                    data: fileData,
                                }, 'uploads/students')

                                // Map frontend file keys to database columns
                                if (name === 'ktpAyah') files.file_ktp_ayah = savedFilename
                                else if (name === 'ktpIbu') files.file_ktp_ibu = savedFilename
                                else if (name === 'kk') files.file_kk = savedFilename
                                else if (name === 'akta') files.file_akta = savedFilename
                                else if (name === 'ijazah') files.file_ijazah = savedFilename
                                else if (name === 'pasFoto') files.file_foto = savedFilename
                            } catch (err) {
                                console.error('Failed to save file during streaming', err)
                            }
                        }
                        fileResolve() // Mark this specific file operation as done
                    })
                })

                filePromises.push(fileProcessingPromise)
            })

            busboy.on('field', (name, val) => {
                body[name] = val
            })

            busboy.on('finish', async () => {
                // Wait for ALL files to finish being saved and mapped to `files` object
                await Promise.all(filePromises)
                resolve(true)
            })
            busboy.on('error', (err) => reject(err))

            event.node.req.pipe(busboy)
        })
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

        // Do not add ID, let Postgres auto-increment the SERIAL column
        // fields.push('id')
        // placeholders.push(`$${values.length + 1}`)
        // values.push(id)

        // Add standard fields
        for (const field of validFields) {
            fields.push(field)
            placeholders.push(`$${values.length + 1}`)
            values.push(body[field] || null)
        }

        // Add file fields
        for (const [key, value] of Object.entries(files)) {
            fields.push(key)
            placeholders.push(`$${values.length + 1}`)
            values.push(value)
        }

        // Add creation timestamp if needed (assuming created_at performs default)

        const { rows: result } = await pool.query(
            `INSERT INTO students (${fields.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING id`,
            values
        )

        return {
            message: 'Student registered successfully',
            id: result[0]?.id,
            files
        }
    } catch (error: any) {
        console.error('Registration error:', error)
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: error.message || 'Internal Server Error' })
    }
})
