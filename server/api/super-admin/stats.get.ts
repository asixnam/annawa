import { defineEventHandler, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get Totals
        const { rows: _res_users } = await pool.query('SELECT COUNT(*) as total FROM users')
        const totalUsers = Number(_res_users[0]?.total || 0)

        const { rows: _res_articles } = await pool.query('SELECT COUNT(*) as total FROM news')
        const totalArticles = Number(_res_articles[0]?.total || 0)

        const { rows: _res_photos } = await pool.query('SELECT COUNT(*) as total FROM gallery')
        const totalPhotos = Number(_res_photos[0]?.total || 0)

        const { rows: _res_students } = await pool.query('SELECT COUNT(*) as total FROM students')
        const totalStudents = Number(_res_students[0]?.total || 0)

        // 2. Get Recent Activities
        // Fetch latest news
        const { rows: recentNews } = await pool.query(
            'SELECT id, title, created_at as date, \'news\' as type FROM news ORDER BY created_at DESC LIMIT 3'
        )

        // Fetch latest students
        const { rows: recentStudents } = await pool.query(
            'SELECT id, name as title, created_at as date, \'student\' as type, unit FROM students ORDER BY created_at DESC LIMIT 3'
        )

        // Fetch latest gallery
        const { rows: recentGallery } = await pool.query(
            'SELECT id, title, created_at as date, \'gallery\' as type FROM gallery ORDER BY created_at DESC LIMIT 3'
        )

        // Combine and sort activities
        const activities = [
            ...recentNews.map((n: any) => ({
                id: `news-${n.id}`,
                message: `Artikel baru berjudul "${n.title}" telah dipublish.`,
                date: n.date,
                color: 'bg-amber-500'
            })),
            ...recentStudents.map((s: any) => ({
                id: `student-${s.id}`,
                message: `Pendaftaran baru: ${s.title} (Unit ${s.unit}).`,
                date: s.date,
                color: 'bg-blue-500'
            })),
            ...recentGallery.map((g: any) => ({
                id: `gallery-${g.id}`,
                message: `Foto baru "${g.title}" ditambahkan ke galeri.`,
                date: g.date,
                color: 'bg-brand-500'
            }))
        ].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 5)

        return {
            stats: {
                users: totalUsers,
                articles: totalArticles,
                photos: totalPhotos,
                registrations: totalStudents
            },
            activities
        }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
