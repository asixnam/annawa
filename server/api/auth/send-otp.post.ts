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
        const config = useRuntimeConfig(event)
        const smtpUser = config.smtpUser
        const smtpPass = config.smtpPass

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: smtpUser,
                pass: smtpPass
            }
        })

        const mailOptions = {
            from: smtpUser,
            to: email,
            subject: 'Reset Password OTP - Pondok Pesantren Annawa',
            html: `<p>Halo,</p><p>Kode OTP Anda untuk reset password adalah: <b>${otp}</b></p><p>Kode ini berlaku selama 15 menit.</p>`
        }

        if (smtpUser && smtpPass && smtpUser !== 'no-reply@example.com') {
            await transporter.sendMail(mailOptions)
        } else {
            console.warn('SMTP not configured or using default! The generated OTP is:', otp);
        }

        return { message: 'OTP sent successfully' }
    } catch (error: any) {
        console.error('Send OTP Error:', error)
        if (error.statusCode) throw error
        throw createError({ statusCode: 500, statusMessage: 'Gagal mengirim OTP' })
    }
})
