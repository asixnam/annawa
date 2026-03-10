
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID is required',
        })
    }

    try {
        const { rows: rows } = await pool.query(
            'SELECT id, name, email, role, image_url, phone, bio, created_at FROM users WHERE id = $1',
            [id]
        )

        if (Array.isArray(rows) && rows.length > 0) {
            return rows[0]
        }

        throw createError({
            statusCode: 404,
            statusMessage: 'User not found',
        })
    } catch (error: any) {
        if (error.statusCode) throw error
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
