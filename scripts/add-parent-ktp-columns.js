import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'annawa'
};

async function migrate() {
    let connection;
    try {
        console.log('Connecting to database...');
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        const columns = [
            'file_ktp_ayah VARCHAR(255) AFTER file_ktp',
            'file_ktp_ibu VARCHAR(255) AFTER file_ktp_ayah'
        ];

        for (const col of columns) {
            try {
                await connection.execute(`ALTER TABLE students ADD COLUMN ${col}`);
                console.log(`Added column: ${col}`);
            } catch (e) {
                if (e.code === 'ER_DUP_FIELDNAME') {
                    console.log(`Column already exists (skipped): ${col.split(' ')[0]}`);
                } else {
                    console.error(`Error adding ${col}:`, e.message);
                }
            }
        }

        // Ensure NIK has an index for duplicate checks
        try {
            await connection.execute(`CREATE INDEX idx_nik ON students(nik)`);
            console.log('Created index on nik.');
        } catch (e) {
            if (e.code === 'ER_DUP_KEYNAME') {
                console.log('Index idx_nik already exists.');
            } else {
                console.error('Error creating index:', e.message);
            }
        }

        console.log('Migration completed successfully.');

    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        if (connection) await connection.end();
    }
}

migrate();
