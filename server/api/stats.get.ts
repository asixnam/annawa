import pool from '../utils/db'

// Lightweight stats endpoint — returns only counts, not full rows
// Used by homepage to avoid fetching thousands of records just for numbers
export default defineEventHandler(async (event) => {
    try {
        const [studentsResult, usersResult, kajianResult] = await Promise.all([
            pool.query(`SELECT COUNT(*) as total FROM students WHERE unit = $1`, ['SANTRI']),
            pool.query(`SELECT COUNT(*) as total FROM users WHERE LOWER(role) = 'author'`),
            pool.query(`SELECT COUNT(*) as total FROM kajian`)
        ])

        return {
            santriTotal: parseInt(studentsResult.rows[0]?.total || '0') + 50,
            authorTotal: parseInt(usersResult.rows[0]?.total || '0') || 50,
            kajianTotal: parseInt(kajianResult.rows[0]?.total || '0'),
            tahunBerdiri: new Date().getFullYear() - 2012
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
