import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from project root
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

async function updateSchema() {
    let connection;
    try {
        console.log('Connecting to database...');
        console.log('Host:', dbConfig.host);
        console.log('User:', dbConfig.user);
        console.log('Database:', dbConfig.database);

        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        const columns = [
            "ADD COLUMN father_name VARCHAR(255) AFTER parent_name",
            "ADD COLUMN father_job VARCHAR(255) AFTER father_name",
            "ADD COLUMN mother_name VARCHAR(255) AFTER father_job",
            "ADD COLUMN mother_job VARCHAR(255) AFTER mother_name"
        ];

        for (const col of columns) {
            try {
                await connection.execute(`ALTER TABLE students ${col}`);
                console.log(`Executed: ${col}`);
            } catch (e) {
                if (e.code === 'ER_DUP_FIELDNAME') {
                    console.log(`Column already exists (skipped): ${col}`);
                } else {
                    console.error(`Error executing ${col}:`, e.message);
                }
            }
        }

        console.log('Schema update v3 completed.');

    } catch (error) {
        console.error('Schema update failed:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
