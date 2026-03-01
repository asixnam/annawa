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

        // Add nik
        try {
            await connection.execute(`ALTER TABLE students ADD COLUMN nik VARCHAR(20) AFTER name`);
            console.log('Added nik column.');
        } catch (e) {
            if (e.code !== 'ER_DUP_FIELDNAME') console.error('Error adding nik:', e.message);
        }

        // Add school_origin
        try {
            await connection.execute(`ALTER TABLE students ADD COLUMN school_origin VARCHAR(255) AFTER address`);
            console.log('Added school_origin column.');
        } catch (e) {
            if (e.code !== 'ER_DUP_FIELDNAME') console.error('Error adding school_origin:', e.message);
        }

        // Add registration_year
        try {
            await connection.execute(`ALTER TABLE students ADD COLUMN registration_year YEAR AFTER status`);
            console.log('Added registration_year column.');
        } catch (e) {
            if (e.code !== 'ER_DUP_FIELDNAME') console.error('Error adding registration_year:', e.message);
        }

        // Add child_order
        try {
            await connection.execute(`ALTER TABLE students ADD COLUMN child_order INT AFTER gender`);
            console.log('Added child_order column.');
        } catch (e) {
            if (e.code !== 'ER_DUP_FIELDNAME') console.error('Error adding child_order:', e.message);
        }

        console.log('Schema update completed.');

    } catch (error) {
        console.error('Schema update failed:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
