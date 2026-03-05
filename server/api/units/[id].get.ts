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
        // Build correct query to prevent integer parsing error for string slugs
        const isNumeric = /^\d+$/.test(id as string)
        const query = isNumeric
            ? 'SELECT * FROM units WHERE id = $1'
            : 'SELECT * FROM units WHERE slug = $1'

        const { rows: units } = await pool.query(query, [id])
        if (units.length === 0) {
            throw createError({
                statusCode: 404,
                statusMessage: 'Unit not found',
            })
        }
        const unit = units[0]
        const actualId = unit.id

        // Parse mission if it's a string
        try {
            if (typeof unit.mission === 'string') {
                unit.mission = JSON.parse(unit.mission)
            }
        } catch (e) {
            unit.mission = []
        }
        if (!unit.mission) unit.mission = []

        // Get Facilities
        const { rows: facilities } = await pool.query('SELECT * FROM unit_facilities WHERE unit_id = $1', [actualId])
        unit.facilities = facilities.map((f: any) => ({ ...f, icon: f.icon_url }))

        // Get Activities
        const { rows: activities } = await pool.query('SELECT * FROM unit_activities WHERE unit_id = $1', [actualId])
        unit.activities = activities.map((a: any) => ({ ...a, image: a.image_url })) // Map image_url to image

        // Get Staff
        const { rows: staff } = await pool.query('SELECT * FROM unit_staff WHERE unit_id = $1', [actualId])
        unit.staff = staff.map((s: any) => ({ ...s, photo: s.photo_url })) // Map photo_url to photo

        // Get Partners
        const { rows: partners } = await pool.query('SELECT * FROM unit_partners WHERE unit_id = $1', [actualId])
        unit.partners = partners.map((p: any) => ({ ...p, logo: p.logo_url })) // Map logo_url to logo

        return unit
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
