import { createError } from 'h3'
import pool from '../../../../utils/db'

export default defineEventHandler(async (event) => {
    const unitId = event.context.params?.id
    const entity = event.context.params?.entity
    const itemId = event.context.params?.itemId

    if (!unitId || !entity || !itemId) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid parameters' })
    }

    let table = ''
    switch (entity) {
        case 'facilities': table = 'unit_facilities'; break;
        case 'activities': table = 'unit_activities'; break;
        case 'staff': table = 'unit_staff'; break;
        case 'partners': table = 'unit_partners'; break;
        default: throw createError({ statusCode: 400, statusMessage: 'Invalid entity type' });
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

        await pool.query(`DELETE FROM ${table} WHERE id = $1 AND unit_id = $2`, [itemId, actualId])
        return { message: 'Item deleted successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
