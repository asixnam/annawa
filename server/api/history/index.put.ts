
import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { text } = body

    if (text === undefined) {
        throw createError({ statusCode: 400, statusMessage: 'Text content is required' })
    }

    try {
        // Upsert history text
        await pool.query(
            `INSERT INTO content_text (key_name, content) VALUES ($1, $2) 
             ON CONFLICT (key_name) DO UPDATE SET content = EXCLUDED.content`,
            ['history', text]
        )
        return { message: 'History updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
