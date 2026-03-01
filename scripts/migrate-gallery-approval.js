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

        console.log('Adding is_approved column to gallery table if not exists...');

        // Check if column exists first
        const [columns] = await connection.query(`
            SELECT COLUMN_NAME 
            FROM INFORMATION_SCHEMA.COLUMNS 
            WHERE TABLE_SCHEMA = ? AND TABLE_NAME = 'gallery' AND COLUMN_NAME = 'is_approved'
        `, [config.database]);

        if (columns.length === 0) {
            await connection.query(`
                ALTER TABLE gallery 
                ADD COLUMN is_approved BOOLEAN DEFAULT true AFTER category
            `);
            console.log('Column is_approved added successfully.');
        } else {
            console.log('Column is_approved already exists.');
        }

        console.log('Migration completed.');

    } catch (error) {
        console.error('Error migrating database:', error);
    } finally {
        if (connection) await connection.end();
    }
}

migrate();
