import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const query = getQuery(event)
        const isPublic = query.public === 'true'

        let sql = 'SELECT * FROM gallery'
        if (isPublic) {
            sql += ' WHERE is_approved = true'
        }
        sql += ' ORDER BY created_at DESC'

        const { rows: rows } = await pool.query(sql)
        return rows
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})
