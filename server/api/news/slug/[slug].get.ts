import { createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    const slug = event.context.params?.slug

    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Slug is required',
        })
    }

    try {
        const { rows } = await pool.query(`
            SELECT 
                n.*, 
                u.name as author_name
            FROM news n 
            LEFT JOIN users u ON n.author_id = u.id 
            WHERE n.slug = $1
        `, [slug])
        if (rows.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'News not found',
            })
        }
        return rows[0]
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
