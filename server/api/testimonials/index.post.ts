import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { name, role, content, avatar_url, batch } = body

    if (!name || !content) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name and content are required',
        })
    }

    try {
        const { rows: result } = await pool.query(
            'INSERT INTO testimonials (name, batch, role, content, avatar_url) VALUES ($1, $2, $3, $4, $5) RETURNING id',
            [name, batch, role, content, avatar_url]
        )

        return { id: result[0]?.id, name, batch, role, content, avatar_url }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
