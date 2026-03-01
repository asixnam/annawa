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
        const [rows]: any = await pool.query('SELECT * FROM gallery WHERE id = ?', [id])
        if (rows.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Gallery item not found',
            })
        }
        return rows[0]
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
