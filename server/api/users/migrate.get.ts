import pool from '../../utils/db'

// One-time migration: add missing columns to users table
// Visit /api/users/migrate once to run this
export default defineEventHandler(async (event) => {
    const results: string[] = []

    const columnsToAdd = [
        { name: 'bio', type: 'TEXT' },
        { name: 'phone', type: 'VARCHAR(20)' },
        { name: 'image_url', type: 'VARCHAR(500)' },
    ]

    for (const col of columnsToAdd) {
        try {
            await pool.query(`ALTER TABLE users ADD COLUMN ${col.name} ${col.type}`)
            results.push(`✅ Added column: ${col.name}`)
        } catch (e: any) {
            if (e.message?.includes('already exists')) {
                results.push(`ℹ️ Column already exists: ${col.name}`)
            } else {
                results.push(`❌ Error adding ${col.name}: ${e.message}`)
            }
        }
    }

    return { results }
})
