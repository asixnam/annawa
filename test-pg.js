import { createPool } from '@vercel/postgres'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: resolve(__dirname, '.env') })

const pool = createPool({
    connectionString: process.env.POSTGRES_URL // Vercel injects this environment variable automatically
})

async function check() {
    try {
        const { rows } = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name;
    `)
        console.log("Tables in DB:", rows.map(r => r.table_name))
    } catch (e) {
        console.error(e)
    }
}

check()
