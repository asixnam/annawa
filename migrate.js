import pool from './server/utils/db.js';

async function setupDb() {
    try {
        console.log('Altering users table...');
        await pool.query(`
      ALTER TABLE users
      ADD COLUMN google_id VARCHAR(255) NULL UNIQUE,
      ADD COLUMN reset_otp VARCHAR(10) NULL,
      ADD COLUMN reset_otp_expires DATETIME NULL;
    `);
        console.log('Successfully altered users table!');
    } catch (err) {
        console.error('Migration failed or already applied:', err.message);
    } finally {
        process.exit(0);
    }
}

setupDb();
