import { readBody, createError } from 'h3'
import pool from '../../../../utils/db'

export default defineEventHandler(async (event) => {
    const unitId = event.context.params?.id
    const entity = event.context.params?.entity
    const itemId = event.context.params?.itemId
    const body = await readBody(event)

    if (!unitId || !entity || !itemId) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid parameters' })
    }

    let table = ''
    let fieldMap: any = {}

    switch (entity) {
        case 'facilities':
            table = 'unit_facilities'
            fieldMap = { name: 'name', icon: 'icon_url' }
            break
        case 'activities':
            table = 'unit_activities'
            fieldMap = { title: 'title', image: 'image_url' } // UI key -> DB column
            break
        case 'staff':
            table = 'unit_staff'
            fieldMap = { name: 'name', position: 'position', photo: 'photo_url' }
            break
        case 'partners':
            table = 'unit_partners'
            fieldMap = { name: 'name', logo: 'logo_url' }
            break
        default:
            throw createError({ statusCode: 400, statusMessage: 'Invalid entity type' })
    }

    try {
        // Resolve actual unit ID (could be slug)
        const [units]: any = await pool.query('SELECT id FROM units WHERE id = ? OR slug = ?', [unitId, unitId])
        if (units.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Unit not found' })
        }
        const actualId = units[0].id

        const updates = []
        const values = []

        for (const [uiKey, dbCol] of Object.entries(fieldMap)) {
            if (body[uiKey] !== undefined) {
                updates.push(`${dbCol} = ?`)
                values.push(body[uiKey])
            }
        }

        if (updates.length > 0) {
            values.push(itemId)
            values.push(actualId) // Security check: ensure item belongs to unit
            await pool.query(`UPDATE ${table} SET ${updates.join(', ')} WHERE id = ? AND unit_id = ?`, values)
        }

        return { message: 'Item updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
