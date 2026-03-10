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
            fieldMap = { name: 'name', icon: 'icon' }
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
        const isNumeric = /^\d+$/.test(unitId as string)
        const unitQuery = isNumeric
            ? 'SELECT id FROM units WHERE id = $1'
            : 'SELECT id FROM units WHERE slug = $1'

        const { rows: units } = await pool.query(unitQuery, [unitId])
        if (units.length === 0) {
            throw createError({ statusCode: 404, statusMessage: 'Unit not found' })
        }
        const actualId = units[0].id

        const updates = []
        const values = []

        for (const [uiKey, dbCol] of Object.entries(fieldMap)) {
            if (body[uiKey] !== undefined) {
                updates.push(`${dbCol} = $${values.length + 1}`)
                values.push(body[uiKey])
            }
        }

        if (updates.length > 0) {
            values.push(itemId)
            values.push(actualId) // Security check: ensure item belongs to unit
            await pool.query(`UPDATE ${table} SET ${updates.join(', ')} WHERE id = $${values.length - 1} AND unit_id = $${values.length}`, values)
        }

        return { message: 'Item updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
