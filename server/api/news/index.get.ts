import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const limit = query.limit ? parseInt(query.limit as string) : 50
        const { rows } = await pool.query(
            'SELECT id, title, slug, content, image_url, author_id, is_published, type, created_at FROM news ORDER BY created_at DESC LIMIT $1',
            [limit]
        )
        return rows
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})

