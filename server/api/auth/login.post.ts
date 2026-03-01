import { defineEventHandler, readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { email, password } = body

    if (!email || !password) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Email and password are required',
        })
    }

    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email])

        if (Array.isArray(rows) && rows.length > 0) {
            const user = rows[0]
            // In a real app, verify password hash. For now, simple comparison as per setup.
            // Assuming 'pass' is stored as plain text for now based on the setup script.
            if (user.password === password) {
                // Return user info without password
                const { password: _, ...userWithoutPassword } = user
                return {
                    user: userWithoutPassword
                }
            }
        }

        throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials',
        })
    } catch (error: any) {
        if (error.statusCode) throw error
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})
