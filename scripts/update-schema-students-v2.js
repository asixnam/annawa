import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

async function updateSchema() {
    let connection;
    try {
        connection = await mysql.createConnection(dbConfig);
        console.log('Connected to database.');

        // Add columns one by one
        const columns = [
            "ADD COLUMN gender ENUM('laki-laki', 'perempuan')",
            "ADD COLUMN birth_place VARCHAR(100)",
            "ADD COLUMN birth_date DATE",
            "ADD COLUMN address TEXT",
            "ADD COLUMN parent_name VARCHAR(255)",
            "ADD COLUMN phone VARCHAR(20)",
            "ADD COLUMN school_origin VARCHAR(255)",
            "ADD COLUMN child_order INT"
        ];

        for (const col of columns) {
            try {
                await connection.execute(`ALTER TABLE students ${col}`);
                console.log(`Executed: ${col}`);
            } catch (e) {
                if (e.code !== 'ER_DUP_FIELDNAME') console.error(`Error executing ${col}:`, e.message);
            }
        }

        // Check if unit_id exists, if not maybe rename unit to unit_id or keep unit?
        // Current table has 'unit' VARCHAR(50).
        // I will use 'unit' column for unit ID.

        console.log('Schema update v2 completed.');

    } catch (error) {
        console.error('Schema update failed:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
