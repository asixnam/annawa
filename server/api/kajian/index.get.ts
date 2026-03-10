import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const limit = query.limit ? parseInt(query.limit as string) : 50
        const { rows } = await pool.query(
            'SELECT id, title, slug, description, video_url, thumbnail_url, ustadz_name, category, schedule, location, created_at FROM kajian ORDER BY created_at DESC LIMIT $1',
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

