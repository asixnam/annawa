
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
        const [rows] = await pool.query('SELECT * FROM testimonials WHERE id = ?', [id])
        if ((rows as any[]).length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Testimonial not found',
            })
        }
        return (rows as any[])[0]
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
