import { defineEventHandler, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get Totals
        const [[{ total: totalUsers }]]: any = await pool.query('SELECT COUNT(*) as total FROM users')
        const [[{ total: totalArticles }]]: any = await pool.query('SELECT COUNT(*) as total FROM news')
        const [[{ total: totalPhotos }]]: any = await pool.query('SELECT COUNT(*) as total FROM gallery')
        const [[{ total: totalStudents }]]: any = await pool.query('SELECT COUNT(*) as total FROM students')

        // 2. Get Recent Activities
        // Fetch latest news
        const [recentNews]: any = await pool.query(
            'SELECT id, title, created_at as date, "news" as type FROM news ORDER BY created_at DESC LIMIT 3'
        )

        // Fetch latest students
        const [recentStudents]: any = await pool.query(
            'SELECT id, name as title, created_at as date, "student" as type, unit FROM students ORDER BY created_at DESC LIMIT 3'
        )

        // Fetch latest gallery
        const [recentGallery]: any = await pool.query(
            'SELECT id, title, created_at as date, "gallery" as type FROM gallery ORDER BY created_at DESC LIMIT 3'
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
