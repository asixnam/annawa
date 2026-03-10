import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const unit = query.unit as string | undefined
    const limit = query.limit ? parseInt(query.limit as string) : 200

    try {
        let sql = `SELECT id, name, nis, nik, unit, status, gender, birth_place, birth_date,
            address, parent_name, father_name, father_job, mother_name, mother_job,
            phone, school_origin, registration_year, child_order, created_at FROM students`
        const params: any[] = []

        if (unit) {
            sql += ' WHERE unit = $1'
            params.push(unit)
        }

        sql += ` ORDER BY created_at DESC LIMIT $${params.length + 1}`
        params.push(limit)

        const { rows } = await pool.query(sql, params)
        return rows
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})

