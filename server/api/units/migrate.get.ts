import pool from '../../utils/db'

export default defineEventHandler(async (event) => {
    try {
        // Create units table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS units (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                slug VARCHAR(100) NOT NULL UNIQUE,
                description TEXT,
                image_url VARCHAR(255),
                vision TEXT,
                mission TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        // Add vision and mission horizontally if units existed but they didn't
        try {
            await pool.query(`ALTER TABLE units ADD COLUMN vision TEXT`);
        } catch (e) {
            // Column might already exist
        }
        try {
            await pool.query(`ALTER TABLE units ADD COLUMN mission TEXT`);
        } catch (e) {
            // Column might already exist
        }

        // Create unit_facilities table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_facilities (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                icon VARCHAR(255)
            )
        `);

        try {
            await pool.query(`ALTER TABLE unit_facilities ADD COLUMN icon VARCHAR(255)`);
        } catch (e) {
            // Column might already exist
        }

        // Create unit_activities table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_activities (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                title VARCHAR(255) NOT NULL,
                image_url VARCHAR(255)
            )
        `);

        try {
            await pool.query(`ALTER TABLE unit_activities ADD COLUMN image_url VARCHAR(255)`);
        } catch (e) {
            // Column might already exist
        }

        // Create unit_staff table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_staff (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                position VARCHAR(100),
                photo_url VARCHAR(255)
            )
        `);

        try {
            await pool.query(`ALTER TABLE unit_staff ADD COLUMN photo_url VARCHAR(255)`);
        } catch (e) {
            // Column might already exist
        }

        // Create unit_partners table
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_partners (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                logo_url VARCHAR(255)
            )
        `);

        try {
            await pool.query(`ALTER TABLE unit_partners ADD COLUMN logo_url VARCHAR(255)`);
        } catch (e) {
            // Column might already exist
        }

        return { success: true, message: 'Units schema migrated successfully' }
    } catch (error: any) {
        return { success: false, error: error.message }
    }
})
