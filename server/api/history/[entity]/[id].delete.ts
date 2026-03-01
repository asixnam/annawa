
import { createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    const entity = event.context.params?.entity
    const id = event.context.params?.id

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'ID is required' })
    }

    let table = ''

    switch (entity) {
        case 'milestones':
            table = 'history_milestones'
            break
        case 'figures':
            table = 'history_figures'
            break
        default:
            throw createError({ statusCode: 400, statusMessage: 'Invalid entity type' })
    }

    try {
        await pool.query(`DELETE FROM ${table} WHERE id = ?`, [id])
        return { message: 'Item deleted successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
