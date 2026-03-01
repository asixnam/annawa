
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
            `INSERT INTO content_text (key_name, content) VALUES (?, ?) 
             ON DUPLICATE KEY UPDATE content = VALUES(content)`,
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
