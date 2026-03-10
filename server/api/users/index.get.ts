import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const { rows: rows } = await pool.query('SELECT id, name, email, role, image_url, bio, phone, created_at FROM users')
        return rows
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})
