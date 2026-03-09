import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
dotenv.config({ path: resolve(__dirname, '.env') })

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL
})

async function check() {
    try {
        const { rows: units } = await pool.query('SELECT * FROM units ORDER BY id ASC')
        console.log("Units:", units.length)

        const { rows: users } = await pool.query('SELECT * FROM users')
        console.log("Users:", users)

        const { rows: facilities } = await pool.query('SELECT * FROM unit_facilities')
        console.log("Facilities:", facilities.length)

        const { rows: activities } = await pool.query('SELECT * FROM unit_activities')
        console.log("Activities:", activities.length)

        const { rows: staff } = await pool.query('SELECT * FROM unit_staff')
        console.log("Staff:", staff.length)

        const { rows: partners } = await pool.query('SELECT * FROM unit_partners')
        console.log("Partners:", partners.length)
    } catch (e) {
        console.error(e)
    }
}

check()
