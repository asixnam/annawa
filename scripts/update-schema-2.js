
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

        // Add columns to gallery
        try {
            await connection.query(`ALTER TABLE gallery ADD COLUMN author VARCHAR(100)`);
            console.log('Added author to gallery');
        } catch (e) { console.log('author already exists or error', e.message) }

        try {
            await connection.query(`ALTER TABLE gallery ADD COLUMN description TEXT`);
            console.log('Added description to gallery');
        } catch (e) { console.log('description already exists or error', e.message) }

        console.log('Schema updated successfully.');

    } catch (error) {
        console.error('Error updating schema:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
