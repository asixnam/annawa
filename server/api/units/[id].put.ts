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

        // Handle mission array -> JSON string
        if (body.mission && Array.isArray(body.mission)) {
            body.mission = JSON.stringify(body.mission)
        }

        const fields = ['name', 'slug', 'description', 'image_url', 'vision', 'mission']
        for (const field of fields) {
            if (body[field] !== undefined) {
                updates.push(`${field} = $${values.length + 1}`)
                values.push(body[field])
            }
        }

        if (updates.length > 0) {
            values.push(id, id)
            await pool.query(`UPDATE units SET ${updates.join(', ')} WHERE id = $${values.length} OR slug = $${values.length + 1}`, values)
        }

        return { message: 'Unit updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
