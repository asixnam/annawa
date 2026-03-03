import { defineEventHandler, readBody, createError } from 'h3'
import pool from '../../utils/db'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
    const { email } = await readBody(event)

    if (!email) {
        throw createError({ statusCode: 400, statusMessage: 'Email is required' })
    }

    try {
        const { rows: rows } = await pool.query('SELECT id, name FROM users WHERE email = $1', [email])
        if (!Array.isArray(rows) || rows.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Email tidak ditemukan' })
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString()
        const expires = new Date(Date.now() + 15 * 60000) // 15 mins

        await pool.query('UPDATE users SET reset_otp = $1, reset_otp_expires = $2 WHERE email = $3', [otp, expires, email])

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER || 'no-reply@example.com',
                pass: process.env.SMTP_PASS || 'password'
            }
        })

        const mailOptions = {
            from: process.env.SMTP_USER || 'no-reply@example.com',
            to: email,
            subject: 'Reset Password OTP - Pondok Pesantren Annawa',
            html: `<p>Halo,</p><p>Kode OTP Anda untuk reset password adalah: <b>${otp}</b></p><p>Kode ini berlaku selama 15 menit.</p>`
        }

        if (process.env.SMTP_USER && process.env.SMTP_PASS) {
            await transporter.sendMail(mailOptions)
        } else {
            console.warn('SMTP not configured! The generated OTP is:', otp);
        }

        return { message: 'OTP sent successfully' }
    } catch (error: any) {
        console.error('Send OTP Error:', error)
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: 'Gagal mengirim OTP' })
    }
})
