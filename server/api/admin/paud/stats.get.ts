import { defineEventHandler, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get Totals for PAUD
        const [[{ total: totalRegistrations }]]: any = await pool.query(
            'SELECT COUNT(*) as total FROM students WHERE unit = "PAUD"'
        )
        const [[{ total: totalNews }]]: any = await pool.query(
            'SELECT COUNT(*) as total FROM news'
        )
        const [[{ total: totalGallery }]]: any = await pool.query(
            'SELECT COUNT(*) as total FROM gallery'
        )

        // 2. Get Recent Activities (PAUD related)
        const [recentStudents]: any = await pool.query(
            'SELECT id, name as title, created_at as date, "student" as type FROM students WHERE unit = "PAUD" ORDER BY created_at DESC LIMIT 3'
        )

        const [recentGallery]: any = await pool.query(
            'SELECT id, title, created_at as date, "gallery" as type FROM gallery ORDER BY created_at DESC LIMIT 2'
        )

        // Combine activities
        const activities = [
            ...recentStudents.map((s: any) => ({
                id: `student-${s.id}`,
                message: `Pendaftaran baru: ${s.title}`,
                date: s.date,
                color: 'bg-blue-500'
            })),
            ...recentGallery.map((g: any) => ({
                id: `gallery-${g.id}`,
                message: `Galeri baru: ${g.title}`,
                date: g.date,
                color: 'bg-brand-500'
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
