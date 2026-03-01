
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

        // Add status to users
        try {
            await connection.query(`ALTER TABLE users ADD COLUMN status ENUM('pending', 'verified', 'rejected') DEFAULT 'verified'`);
            console.log('Added status to users');
        } catch (e) { console.log('status already exists or error', e.message) }

        // Add bio to users
        try {
            await connection.query(`ALTER TABLE users ADD COLUMN bio TEXT`);
            console.log('Added bio to users');
        } catch (e) { console.log('bio already exists or error', e.message) }

        // Add phone to users
        try {
            await connection.query(`ALTER TABLE users ADD COLUMN phone VARCHAR(20)`);
            console.log('Added phone to users');
        } catch (e) { console.log('phone already exists or error', e.message) }

        console.log('Schema updated successfully.');

    } catch (error) {
        console.error('Error updating schema:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
