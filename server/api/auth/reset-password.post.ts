import { defineEventHandler, readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const { email, otp, newPassword } = await readBody(event)

    if (!email || !otp || !newPassword) {
        throw createError({ statusCode: 400, statusMessage: 'Semua field harus diisi' })
    }

    try {
        const { rows: rows } = await pool.query('SELECT reset_otp, reset_otp_expires FROM users WHERE email = $1', [email])
        if (!Array.isArray(rows) || rows.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Email tidak ditemukan' })
        }

        const user = rows[0]
        if (user.reset_otp !== otp || new Date() > new Date(user.reset_otp_expires)) {
            throw createError({ statusCode: 400, statusMessage: 'OTP tidak valid atau sudah kadaluwarsa' })
        }

        await pool.query('UPDATE users SET password = $1, reset_otp = NULL, reset_otp_expires = NULL WHERE email = $2', [newPassword, email])

        return { message: 'Password berhasil diubah' }
    } catch (error: any) {
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: 'Gagal mereset password' })
    }
})
