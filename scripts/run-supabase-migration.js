import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });
import pool from '../server/utils/db.ts';

async function migrate() {
    console.log('Starting migration...');
    try {
        // Create units table
        console.log('Creating units table...');
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

        // Create unit_facilities table
        console.log('Creating unit_facilities table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_facilities (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                icon VARCHAR(255)
            )
        `);

        // Create unit_activities table
        console.log('Creating unit_activities table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_activities (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                title VARCHAR(255) NOT NULL,
                image_url VARCHAR(255)
            )
        `);

        // Create unit_staff table
        console.log('Creating unit_staff table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_staff (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                position VARCHAR(100),
                photo_url VARCHAR(255)
            )
        `);

        // Create unit_partners table
        console.log('Creating unit_partners table...');
        await pool.query(`
            CREATE TABLE IF NOT EXISTS unit_partners (
                id SERIAL PRIMARY KEY,
                unit_id INT NOT NULL REFERENCES units(id) ON DELETE CASCADE,
                name VARCHAR(255) NOT NULL,
                logo_url VARCHAR(255)
            )
        `);

        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await pool.end();
    }
}

migrate();
