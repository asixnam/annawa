import { readBody, createError } from 'h3'
import pool from '../../utils/db'

// Simple slugify function
function slugify(text: string) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '')             // Trim - from end of text
}

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { title, content, image_url, author_id, is_published, type } = body

    if (!title) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Title is required',
        })
    }

    const slug = body.slug || slugify(title)

    try {
        const { rows: result } = await pool.query(
            'INSERT INTO news (title, slug, content, image_url, author_id, is_published, type) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id',
            [title, slug, content, image_url, author_id, is_published || true, type || 'Berita']
        )

        return { id: result[0]?.id, title, slug }
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
