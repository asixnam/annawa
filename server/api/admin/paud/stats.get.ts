import { defineEventHandler, createError } from 'h3'
import pool from '../../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // 1. Get Totals for PAUD
        const { rows: _res_reg } = await pool.query(
            'SELECT COUNT(*) as total FROM students WHERE unit = $1', ['PAUD']
        )
        const totalRegistrations = Number(_res_reg[0]?.total || 0)

        const { rows: _res_news } = await pool.query(
            'SELECT COUNT(*) as total FROM news'
        )
        const totalNews = Number(_res_news[0]?.total || 0)

        const { rows: _res_gallery } = await pool.query(
            'SELECT COUNT(*) as total FROM gallery'
        )
        const totalGallery = Number(_res_gallery[0]?.total || 0)

        // 2. Get Recent Activities (PAUD related)
        const { rows: recentStudents } = await pool.query(
            'SELECT id, name as title, created_at as date, \'student\' as type FROM students WHERE unit = \'PAUD\' ORDER BY created_at DESC LIMIT 3'
        )

        const { rows: recentGallery } = await pool.query(
            'SELECT id, title, created_at as date, \'gallery\' as type FROM gallery ORDER BY created_at DESC LIMIT 2'
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
