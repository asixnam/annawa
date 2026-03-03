import { readBody, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    const { is_approved } = body

    if (is_approved === undefined) {
        throw createError({
            statusCode: 400,
            statusMessage: 'is_approved status is required',
        })
    }

    try {
        await pool.query(
            'UPDATE gallery SET is_approved = $1 WHERE id = $2',
            [is_approved, id]
        )

        return { success: true, id, is_approved }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
