
import { createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get History Text
        const [texts]: any = await pool.query('SELECT content FROM content_text WHERE key_name = ?', ['history'])
        const historyText = texts.length > 0 ? texts[0].content : ''

        // 2. Get Milestones
        const [milestones]: any = await pool.query('SELECT * FROM history_milestones ORDER BY year ASC')

        // 3. Get Figures
        const [figures]: any = await pool.query('SELECT * FROM history_figures')

        // Map photo_url to photo for frontend compatibility
        const mappedFigures = figures.map((f: any) => ({
            ...f,
            photo: f.photo_url
        }))

        return {
            text: historyText,
            milestones,
            figures: mappedFigures
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
