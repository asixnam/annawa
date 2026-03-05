import { createError } from 'h3'
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
        const isNumeric = /^\d+$/.test(id as string)
        const query = isNumeric
            ? 'DELETE FROM units WHERE id = $1'
            : 'DELETE FROM units WHERE slug = $1'
        await pool.query(query, [id])
        return { message: 'Unit deleted successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
