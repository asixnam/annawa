import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const isPublic = query.public === 'true'
        const limit = query.limit ? parseInt(query.limit as string) : 100

        let sql = 'SELECT id, title, image_url, category, author, author_id, description, is_approved, created_at FROM gallery'
        const params: any[] = []

        if (isPublic) {
            sql += ' WHERE is_approved = true'
        }

        sql += ` ORDER BY created_at DESC LIMIT $${params.length + 1}`
        params.push(limit)

        const { rows } = await pool.query(sql, params)
        return rows
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})

