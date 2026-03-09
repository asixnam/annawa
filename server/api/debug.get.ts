import { defineEventHandler } from 'h3'
import pool from '../utils/db'

export default defineEventHandler(async (event) => {
    let dbStatus: any = {}
    try {
        const result = await pool.query('SELECT NOW() as time, current_database() as db')
        dbStatus = {
            connected: true,
            time: result.rows[0].time,
            database: result.rows[0].db,
        }
    } catch (e: any) {
        dbStatus = {
            connected: false,
            error: e.message,
            code: e.code,
        }
    }

    return {
        postgres_url_set: !!process.env.POSTGRES_URL,
        postgres_url_prefix: (process.env.POSTGRES_URL || '').substring(0, 30),
        node_env: process.env.NODE_ENV,
        db: dbStatus
    }
})

