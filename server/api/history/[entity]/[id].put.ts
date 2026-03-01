
import { readBody, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    const entity = event.context.params?.entity
    const id = event.context.params?.id
    const body = await readBody(event)

    if (!id) {
        throw createError({ statusCode: 400, statusMessage: 'ID is required' })
    }

    let table = ''
    let fieldMap: any = {}

    switch (entity) {
        case 'milestones':
            table = 'history_milestones'
            fieldMap = { year: 'year', title: 'title', description: 'description' }
            break
        case 'figures':
            table = 'history_figures'
            fieldMap = { name: 'name', role: 'role', photo: 'photo_url' }
            break
        default:
            throw createError({ statusCode: 400, statusMessage: 'Invalid entity type' })
    }

    try {
        const updates = []
        const values = []

        for (const [uiKey, dbCol] of Object.entries(fieldMap)) {
            if (body[uiKey] !== undefined) {
                updates.push(`${dbCol} = ?`)
                values.push(body[uiKey])
            }
        }

        if (updates.length > 0) {
            values.push(id)
            await pool.query(`UPDATE ${table} SET ${updates.join(', ')} WHERE id = ?`, values)
        }

        return { message: 'Item updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
