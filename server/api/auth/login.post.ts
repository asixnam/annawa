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
        const { rows: rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])

        if (Array.isArray(rows) && rows.length > 0) {
            const user = rows[0]
            if (user.password === password) {
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
        // Expose real error for debugging
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})

