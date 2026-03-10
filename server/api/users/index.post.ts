import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, email, password, role, bio, phone, image_url } = body

    if (!name || !email || !password || !role) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name, email, password, and role are required',
        })
    }

    try {
        // Check if email exists
        const { rows: existing } = await pool.query('SELECT id FROM users WHERE email = $1', [email])
        if (Array.isArray(existing) && existing.length > 0) {
            throw createError({
                statusCode: 409,
                statusMessage: 'Email already exists',
            })
        }

        const { rows: result } = await pool.query(
            'INSERT INTO users (name, email, password, role, bio, phone, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
            [name, email, password, role, bio || null, phone || null, image_url || null]
        )

        return { id: result[0]?.id, name, email, role }
    } catch (error: any) {
        if (error.statusCode) throw error
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
