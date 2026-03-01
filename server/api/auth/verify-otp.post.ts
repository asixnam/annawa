import { defineEventHandler, readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const { email, otp } = await readBody(event)

    if (!email || !otp) {
        throw createError({ statusCode: 400, statusMessage: 'Email dan OTP diperlukan' })
    }

    try {
        const [rows]: any = await pool.query('SELECT reset_otp, reset_otp_expires FROM users WHERE email = ?', [email])
        if (!Array.isArray(rows) || rows.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Email tidak ditemukan' })
        }

        const user = rows[0]
        if (user.reset_otp !== otp || new Date() > new Date(user.reset_otp_expires)) {
            throw createError({ statusCode: 400, statusMessage: 'OTP tidak valid atau sudah kadaluwarsa' })
        }

        return { message: 'OTP valid' }
    } catch (error: any) {
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: 'Gagal memverifikasi OTP' })
    }
})
