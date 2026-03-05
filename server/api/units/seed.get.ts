import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        const defaultUnits = [
            { name: 'PAUD', slug: 'paud', description: 'Pendidikan Anak Usia Dini binaan Khozinatul Ulum An-Nawa.', vision: 'Membentuk generasi qurani sejak dini', mission: '1. Pengenalan huruf hijaiyah\n2. Menanamkan akhlak mulia' },
            { name: 'SDQTA', slug: 'sdqta', description: 'Sekolah Dasar Al-Qur`an Terpadu An-Nawa, mendidik anak dengan nilai Islami.', vision: 'Menjadi SD unggulan berbasis Al-Quran', mission: '1. Hafalan Al-Quran\n2. Pendidikan karakter' },
            { name: 'Pondok Pesantren', slug: 'pondok-pesantren', description: 'Pondok Pesantren Khozinatul Ulum An-Nawa untuk pendalaman agama Islam.', vision: 'Mencetak kader ulama', mission: '1. Mengkaji kitab kuning\n2. Pendalaman tauhid' }
        ];

        const unitIds: Record<string, number> = {};

        for (const unit of defaultUnits) {
            const { rows } = await pool.query(`
                INSERT INTO units (name, slug, description, vision, mission)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (slug) DO UPDATE SET 
                  description = EXCLUDED.description,
                  vision = EXCLUDED.vision,
                  mission = EXCLUDED.mission
                RETURNING id;
            `, [unit.name, unit.slug, unit.description, unit.vision, unit.mission]);

            if (rows.length > 0) {
                unitIds[unit.slug] = rows[0].id;
            } else {
                const { rows: existing } = await pool.query('SELECT id FROM units WHERE slug = $1', [unit.slug]);
                if (existing.length > 0) unitIds[unit.slug] = existing[0].id;
            }
        }

        // Add default facilities
        const facilities = [
            { slug: 'paud', name: 'Ruang Kelas Nyaman', icon: '🏫' },
            { slug: 'paud', name: 'Area Bermain', icon: '⚽' },
            { slug: 'sdqta', name: 'Perpustakaan Mini', icon: '📚' },
            { slug: 'pondok-pesantren', name: 'Masjid Jami', icon: '🕌' },
            { slug: 'pondok-pesantren', name: 'Asrama Santri', icon: '🏢' },
        ];

        await pool.query('DELETE FROM unit_facilities');
        for (const fac of facilities) {
            if (unitIds[fac.slug]) {
                await pool.query(`INSERT INTO unit_facilities (unit_id, name, icon) VALUES ($1, $2, $3)`, [unitIds[fac.slug], fac.name, fac.icon]);
            }
        }

        // Add default activities
        const activities = [
            { slug: 'paud', title: 'Belajar dan Mewarnai', image_url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop' },
            { slug: 'sdqta', title: 'Hafalan Al-Quran (Tahfidz)', image_url: 'https://images.unsplash.com/photo-1609599006353-e629aaab315d?q=80&w=600&auto=format&fit=crop' },
            { slug: 'pondok-pesantren', title: 'Ngaji Kitab Kuning', image_url: 'https://images.unsplash.com/photo-1585036156171-384164a8c675?q=80&w=600&auto=format&fit=crop' }
        ];

        await pool.query('DELETE FROM unit_activities');
        for (const act of activities) {
            if (unitIds[act.slug]) {
                await pool.query(`INSERT INTO unit_activities (unit_id, title, image_url) VALUES ($1, $2, $3)`, [unitIds[act.slug], act.title, act.image_url]);
            }
        }

        return { success: true, message: 'All units data (including facilities & activities) seeded successfully in Neon DB!' }
    } catch (error: any) {
        return { success: false, error: error.message }
    }
})
