import { createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID is required',
        })
    }

    try {
        const [rows]: any = await pool.query('SELECT * FROM students WHERE id = ?', [id])
        if (rows.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Student not found',
            })
        }
        const student = rows[0]

        // Transform for frontend compatibility
        student.files = {
            ktpAyah: student.file_ktp_ayah,
            ktpIbu: student.file_ktp_ibu,
            kk: student.file_kk,
            akta: student.file_akta,
            ijazah: student.file_ijazah,
            ijazahTk: student.file_ijazah, // Alias for SD
            pasFoto: student.file_foto
        }

        return student
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
