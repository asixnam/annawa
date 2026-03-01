import { defineEventHandler, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get Totals for Pondok (SANTRI)
        const [[{ total: totalRegistrations }]]: any = await pool.query(
            'SELECT COUNT(*) as total FROM students WHERE unit = "SANTRI"'
        )
        const [[{ total: totalNews }]]: any = await pool.query('SELECT COUNT(*) as total FROM news')
        const [[{ total: totalGallery }]]: any = await pool.query('SELECT COUNT(*) as total FROM gallery')

        // 2. Get Recent Activities
        // Latest students in SANTRI unit
        const [recentStudents]: any = await pool.query(
            'SELECT id, name as title, created_at as date, "student" as type FROM students WHERE unit = "SANTRI" ORDER BY created_at DESC LIMIT 2'
        )

        // Latest News
        const [recentNews]: any = await pool.query(
            'SELECT id, title, created_at as date, "news" as type FROM news ORDER BY created_at DESC LIMIT 1'
        )

        // Latest Gallery
        const [recentGallery]: any = await pool.query(
            'SELECT id, title, created_at as date, "gallery" as type FROM gallery ORDER BY created_at DESC LIMIT 1'
        )

        // Latest Kajian
        const [recentKajian]: any = await pool.query(
            'SELECT id, title, created_at as date, "kajian" as type FROM kajian ORDER BY created_at DESC LIMIT 1'
        )

        // Combine activities
        const activities = [
            ...recentStudents.map((s: any) => ({
                id: `student-${s.id}`,
                message: `Pendaftaran santri baru: ${s.title}.`,
                date: s.date,
                color: 'bg-blue-500'
            })),
            ...recentNews.map((n: any) => ({
                id: `news-${n.id}`,
                message: `Berita baru: "${n.title}".`,
                date: n.date,
                color: 'bg-amber-500'
            })),
            ...recentGallery.map((g: any) => ({
                id: `gallery-${g.id}`,
                message: `Foto galeri baru: ${g.title}.`,
                date: g.date,
                color: 'bg-brand-500'
            })),
            ...recentKajian.map((k: any) => ({
                id: `kajian-${k.id}`,
                message: `Update Kajian: ${k.title}.`,
                date: k.date,
                color: 'bg-red-500'
            }))
        ].sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())

        return {
            stats: {
                total: totalRegistrations,
                news: totalNews,
                gallery: totalGallery
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
