import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const body = await readBody(event)

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID is required',
        })
    }

    try {
        const updates = []
        const values = []

        const fields = ['title', 'image_url', 'category', 'author', 'description']
        for (const field of fields) {
            if (body[field] !== undefined) {
                updates.push(`${field} = ?`)
                values.push(body[field])
            }
        }

        if (updates.length > 0) {
            values.push(id)
            await pool.query(`UPDATE gallery SET ${updates.join(', ')} WHERE id = ?`, values)
        }

        return { message: 'Gallery updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
