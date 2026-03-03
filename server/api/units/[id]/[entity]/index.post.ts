import { readBody, createError } from 'h3'
import pool from '../../../../utils/db'

export default defineEventHandler(async (event) => {
    const unitId = event.context.params?.id
    const entity = event.context.params?.entity
    const body = await readBody(event)

    if (!unitId || !entity) {
        throw createError({ statusCode: 400, statusMessage: 'Invalid parameters' })
    }

    // Resolve actual unit ID (could be slug)
    const { rows: units } = await pool.query('SELECT id FROM units WHERE id = $1 OR slug = $2', [unitId, unitId])
    if (units.length === 0) {
        throw createError({ statusCode: 404, statusMessage: 'Unit not found' })
    }
    const actualId = units[0].id

    let table = ''
    let columns = []
    let values = []
    let placeholders = []

    // Map entity to table and columns
    switch (entity) {
        case 'facilities':
            table = 'unit_facilities'
            columns = ['unit_id', 'name', 'icon_url']
            values = [actualId, body.name, body.icon]
            break
        case 'activities':
            table = 'unit_activities'
            columns = ['unit_id', 'title', 'image_url']
            values = [actualId, body.title, body.image] // UI sends image, DB expects image_url
            break
        case 'staff':
            table = 'unit_staff'
            columns = ['unit_id', 'name', 'position', 'photo_url']
            values = [actualId, body.name, body.position, body.photo] // UI sends photo
            break
        case 'partners':
            table = 'unit_partners'
            columns = ['unit_id', 'name', 'logo_url']
            values = [actualId, body.name, body.logo] // UI sends logo
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
        return { id: (result as any).insertId, ...body }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error'
        })
    }
})
