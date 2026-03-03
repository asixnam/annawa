import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const unit_id = query.unit_id
    console.log('API /api/students getQuery:', query, 'unit_id:', unit_id)

    try {
        let sql = 'SELECT * FROM students'
        const params: any[] = []

        if (unit_id) {
            sql += ' WHERE unit = ?'
            params.push(unit_id)
        }

        sql += ' ORDER BY created_at DESC'

        const { rows: rows } = await pool.query(sql, params)
        return rows
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
