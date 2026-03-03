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
        const { rows: rows } = await pool.query('SELECT * FROM kajian WHERE slug = $1', [slug])
        if (rows.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Kajian not found',
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
