import pool from './server/utils/db'

async function setupDb() {
    try {
        console.log('Altering users table...')
        // Using sub-queries or separate ALTERs to avoid total failure if one column exists
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_otp VARCHAR(10)')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_otp_expires TIMESTAMP')
        console.log('Successfully altered users table!')
    } catch (err: any) {
        if (err.code === 'ER_DUP_FIELDNAME') {
            console.log('Columns already exist.')
        } else {
            console.error('Migration failed:', err.message)
        }
    } finally {
        process.exit(0)
    }
}

setupDb()
