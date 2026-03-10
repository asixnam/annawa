import { readBody, createError } from 'h3'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const id = event.context.params?.id
    const body = await readBody(event)
    const { name, email, role, password, bio, phone, image_url } = body

    if (!id) {
        throw createError({
            statusCode: 400,
            statusMessage: 'ID is required',
        })
    }

    try {
        const updates = []
        const values = []

        if (name) {
            updates.push(`name = $${values.length + 1}`)
            values.push(name)
        }
        if (email) {
            updates.push(`email = $${values.length + 1}`)
            values.push(email)
        }
        if (role) {
            updates.push(`role = $${values.length + 1}`)
            values.push(role)
        }
        if (password) {
            updates.push(`password = $${values.length + 1}`)
            values.push(password)
        }
        if (bio !== undefined) {
            updates.push(`bio = $${values.length + 1}`)
            values.push(bio)
        }
        if (phone !== undefined) {
            updates.push(`phone = $${values.length + 1}`)
            values.push(phone)
        }
        if (image_url !== undefined) {
            updates.push(`image_url = $${values.length + 1}`)
            values.push(image_url)
        }

        if (updates.length > 0) {
            values.push(id)
            await pool.query(`UPDATE users SET ${updates.join(', ')} WHERE id = $${values.length}`, values)

            // Try to sync name with gallery table (fail silently if column doesn't exist)
            if (name) {
                try {
                    await pool.query('UPDATE gallery SET author = $1 WHERE author_id = $2', [name, id])
                } catch (_) {
                    // gallery.author_id may not exist yet — ignore
                }
            }
        }

        return { message: 'User updated successfully' }
    } catch (error: any) {
        throw createError({
            statusCode: 500,
            statusMessage: error.message || 'Internal Server Error',
        })
    }
})
