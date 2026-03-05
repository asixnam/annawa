import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // Insert initial units if not exist
        const defaultUnits = [
            { name: 'PAUD', slug: 'paud', description: 'Pendidikan Anak Usia Dini' },
            { name: 'SDQTA', slug: 'sdqta', description: 'Sekolah Dasar Al-Qur`an Terpadu An-Nawa' },
            { name: 'Pondok Pesantren', slug: 'pondok-pesantren', description: 'Pondok Pesantren Khozinatul Ulum An-Nawa' }
        ];

        for (const unit of defaultUnits) {
            await pool.query(`
                INSERT INTO units (name, slug, description)
                VALUES ($1, $2, $3)
                ON CONFLICT (slug) DO NOTHING
            `, [unit.name, unit.slug, unit.description]);
        }

        return { success: true, message: 'Units data seeded successfully' }
    } catch (error: any) {
        return { success: false, error: error.message }
    }
})
