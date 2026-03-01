import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load env vars
dotenv.config({ path: resolve(__dirname, '../.env') });

const config = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'annawa',
};

async function migrate() {
    let connection;
    try {
        connection = await mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });

        console.log('Adding author_id column to gallery table if not exists...');

        // Check if column exists first
        const [columns] = await connection.query(`
            SELECT COLUMN_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'gallery' AND COLUMN_NAME = 'author_id'
        `, [config.database]);

        if (columns.length === 0) {
            await connection.query(`
                ALTER TABLE gallery 
                ADD COLUMN author_id INT AFTER category
            `);

            await connection.query(`
                ALTER TABLE gallery 
                ADD CONSTRAINT fk_gallery_author FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
            `);
            console.log('Column author_id added successfully.');
        } else {
            console.log('Column author_id already exists.');
        }

        console.log('Migration completed.');

    } catch (error) {
        console.error('Error migrating database:', error);
    } finally {
        if (connection) await connection.end();
    }
}

migrate();
