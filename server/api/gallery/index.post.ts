import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { title, image_url, category, author, author_id, description, user_role } = body

    // Default to true for backward compatibility or direct DB manipulations, 
    // but if user_role is explicitly 'author', set to false.
    let is_approved = true
    if (user_role === 'author') {
        is_approved = false
    }

    if (!image_url) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Image URL is required',
        })
    }

    try {
        const { rows: result } = await pool.query(
            'INSERT INTO gallery (title, image_url, category, author, author_id, description, is_approved) VALUES ($1, $2, $3, $4, $5, $6, $7)',
            [title, image_url, category, author, author_id || null, description, is_approved]
        )

        return { id: (result as any).insertId, title, image_url, is_approved }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
