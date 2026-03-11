import { defineEventHandler, readBody, createError } from 'h3'
import { OAuth2Client } from 'google-auth-library'
import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const googleClientId = config.public.googleClientId

    if (!googleClientId || googleClientId === 'YOUR_GOOGLE_CLIENT_ID') {
        console.error('Server Configuration Error: GOOGLE_CLIENT_ID is not set.')
    }

    const client = new OAuth2Client(googleClientId)

    const body = await readBody(event)
    const { credential, register_as } = body

    if (!credential) {
        throw createError({ statusCode: 400, statusMessage: 'Token is required' })
    }

    try {
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: googleClientId,
        })
        const payload = ticket.getPayload()
        if (!payload || !payload.email) {
            throw createError({ statusCode: 400, statusMessage: 'Invalid token payload' })
        }

        const { email, sub: googleId, name, picture } = payload

        // Check if user exists
        const { rows: rows } = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        let user: any = null;

        if (Array.isArray(rows) && rows.length > 0) {
            user = rows[0]
            // Update google_id and picture if not set
            if (!user.google_id) {
                // Ignore missing picture column for now by trying to update it or conditionally checking
                await pool.query('UPDATE users SET google_id = $1 WHERE id = $2', [googleId, user.id])
            }
        } else {
            // Register as author by default if coming from register.vue, or else just user
            const role = register_as === 'author' ? 'author' : 'user'
            // For author, status might be 'pending', for user 'active'
            const status = role === 'author' ? 'pending' : 'active'

            const { rows: result } = await pool.query(
                `INSERT INTO users (name, email, role, status, google_id) 
                VALUES ($1, $2, $3, $4, $5) RETURNING id`,
                [name || email.split('@')[0], email, role, status, googleId]
            )

            const { rows: newRows } = await pool.query('SELECT * FROM users WHERE id = $1', [result[0].id])
            if (Array.isArray(newRows) && newRows.length > 0) {
                user = newRows[0]
            }
        }

        if (user) {
            const { password: _, ...userWithoutPassword } = user
            return {
                message: 'Success',
                user: userWithoutPassword
            }
        } else {
            throw createError({ statusCode: 500, statusMessage: 'Failed to process user' })
        }
    } catch (error: any) {
        console.error(error)
        if (error.statusCode) throw error
        throw createError({
            statusCode: 401,
            statusMessage: 'Failed to verify Google Token',
        })
    }
})
