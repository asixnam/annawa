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
    const { name, description, image_url } = body

    if (!name) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Name is required',
        })
    }

    const slug = body.slug || slugify(name)

    try {
        const [result] = await pool.query(
            'INSERT INTO units (name, slug, description, image_url) VALUES (?, ?, ?, ?)',
            [name, slug, description, image_url]
        )

        return { id: (result as any).insertId, name, slug }
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
