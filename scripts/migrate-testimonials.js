
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Manually load .env from project root
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'annawa',
};

async function run() {
    console.log('Connecting to DB:', dbConfig.host, dbConfig.user, dbConfig.database);
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Adding batch column...');
        await connection.query('ALTER TABLE testimonials ADD COLUMN batch VARCHAR(255) AFTER name');
        console.log('Column added successfully.');
    } catch (e) {
        if (e.code === 'ER_DUP_FIELDNAME') {
            console.log('Column already exists.');
        } else {
            console.error('Error:', e);
        }
    } finally {
        if (connection) await connection.end();
    }
}

run();
