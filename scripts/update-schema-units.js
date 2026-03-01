
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

        // Add columns to units
        try {
            await connection.query(`ALTER TABLE units ADD COLUMN vision TEXT`);
            console.log('Added vision to units');
        } catch (e) { console.log('vision already exists or error', e.message) }

        try {
            await connection.query(`ALTER TABLE units ADD COLUMN mission TEXT`); // will store JSON array
            console.log('Added mission to units');
        } catch (e) { console.log('mission already exists or error', e.message) }

        // Create sub-tables
        await connection.query(`
      CREATE TABLE IF NOT EXISTS unit_facilities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        unit_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        icon VARCHAR(255),
        FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
      )
    `);
        console.log('Created unit_facilities table');

        await connection.query(`
      CREATE TABLE IF NOT EXISTS unit_activities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        unit_id INT NOT NULL,
        title VARCHAR(255) NOT NULL,
        image_url VARCHAR(255),
        FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
      )
    `);
        console.log('Created unit_activities table');

        await connection.query(`
      CREATE TABLE IF NOT EXISTS unit_staff (
        id INT AUTO_INCREMENT PRIMARY KEY,
        unit_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        position VARCHAR(100),
        photo_url VARCHAR(255),
        FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
      )
    `);
        console.log('Created unit_staff table');

        await connection.query(`
      CREATE TABLE IF NOT EXISTS unit_partners (
        id INT AUTO_INCREMENT PRIMARY KEY,
        unit_id INT NOT NULL,
        name VARCHAR(255) NOT NULL,
        logo_url VARCHAR(255),
        FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
      )
    `);
        console.log('Created unit_partners table');

        console.log('Schema updated successfully.');

    } catch (error) {
        console.error('Error updating schema:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
