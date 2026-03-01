import { readBody, createError } from 'h3'
import pool from '../../utils/db'

function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { title, description, video_url, thumbnail_url, ustadz_name, category, schedule, location } = body

    if (!title) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Title is required',
        })
    }

    const slug = body.slug || slugify(title)

    try {
        const [result] = await pool.query(
            'INSERT INTO kajian (title, slug, description, video_url, thumbnail_url, ustadz_name, category, schedule, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [title, slug, description, video_url, thumbnail_url, ustadz_name, category, schedule, location]
        )

        return { id: (result as any).insertId, title, slug }
    } catch (error: any) {
        if (error.code === 'ER_DUP_ENTRY') {
            throw createError({
                statusCode: 409,
                statusMessage: 'Slug already exists',
            })
        }
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
