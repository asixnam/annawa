
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'annawa',
};

async function updateSchema() {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        console.log('Connected to database...');

        // Add columns to kajian
        try {
            await connection.query(`ALTER TABLE kajian ADD COLUMN category VARCHAR(50) DEFAULT 'Sorogan'`);
            console.log('Added category to kajian');
        } catch (e) { console.log('category already exists or error', e.message) }

        try {
            await connection.query(`ALTER TABLE kajian ADD COLUMN schedule VARCHAR(100)`);
            console.log('Added schedule to kajian');
        } catch (e) { console.log('schedule already exists or error', e.message) }

        try {
            await connection.query(`ALTER TABLE kajian ADD COLUMN location VARCHAR(100)`);
            console.log('Added location to kajian');
        } catch (e) { console.log('location already exists or error', e.message) }

        // Add columns to news
        try {
            await connection.query(`ALTER TABLE news ADD COLUMN type VARCHAR(50) DEFAULT 'Berita'`);
            console.log('Added type to news');
        } catch (e) { console.log('type already exists or error', e.message) }

        // Add columns to users
        try {
            await connection.query(`ALTER TABLE users ADD COLUMN image_url VARCHAR(255)`);
            console.log('Added image_url to users');
        } catch (e) { console.log('image_url already exists or error', e.message) }


        console.log('Schema updated successfully.');

    } catch (error) {
        console.error('Error updating schema:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
