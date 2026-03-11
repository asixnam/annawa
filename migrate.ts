import pool from './server/utils/db'

async function setupDb() {
    try {
        console.log('Altering users table...')
        // Comprehensive fix for all expected columns
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS status VARCHAR(20) DEFAULT \'active\'')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS google_id VARCHAR(255) UNIQUE')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS bio TEXT')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS phone VARCHAR(20)')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS image_url TEXT')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_otp VARCHAR(10)')
        await pool.query('ALTER TABLE users ADD COLUMN IF NOT EXISTS reset_otp_expires TIMESTAMP')
        console.log('Successfully altered users table with all columns!')
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
