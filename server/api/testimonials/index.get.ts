import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const [rows] = await pool.query('SELECT * FROM testimonials ORDER BY created_at DESC')
        return rows
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})
