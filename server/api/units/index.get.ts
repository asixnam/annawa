import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const [units] = await pool.query('SELECT * FROM units ORDER BY id ASC')
        const [facilities] = await pool.query('SELECT * FROM unit_facilities')
        const [activities] = await pool.query('SELECT * FROM unit_activities')
        const [staff] = await pool.query('SELECT * FROM unit_staff')
        const [partners] = await pool.query('SELECT * FROM unit_partners')

        const unitsWithRelations = (units as any[]).map(unit => {
            return {
                ...unit,
                facilities: (facilities as any[]).filter(f => f.unit_id === unit.id).map(f => ({ ...f, icon: f.icon || f.icon_url })),
                activities: (activities as any[]).filter(a => a.unit_id === unit.id).map(a => ({ ...a, image: a.image || a.image_url })),
                staff: (staff as any[]).filter(s => s.unit_id === unit.id).map(s => ({ ...s, photo: s.photo || s.photo_url })),
                partners: (partners as any[]).filter(p => p.unit_id === unit.id).map(p => ({ ...p, logo: p.logo || p.logo_url }))
            }
        })

        return unitsWithRelations
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Internal Server Error',
        })
    }
})
