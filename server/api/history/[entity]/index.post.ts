
import { readBody, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    const entity = event.context.params?.entity
    const body = await readBody(event)

    let table = ''
    let columns = []
    let values = []
    let placeholders = []

    // Map entity to table and columns
    switch (entity) {
        case 'milestones':
            table = 'history_milestones'
            columns = ['year', 'title', 'description']
            values = [body.year, body.title, body.description]
            break
        case 'figures':
            table = 'history_figures'
            columns = ['name', 'role', 'photo_url']
            values = [body.name, body.role, body.photo] // UI sends photo
            break
        default:
            throw createError({ statusCode: 400, statusMessage: 'Invalid entity type' })
    }

    placeholders = values.map((_, i) => `$${i + 1}`)

    try {
        const { rows: result } = await pool.query(
            `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders.join(', ')})`,
            values
        )
        return { id: result[0]?.id, ...body }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
