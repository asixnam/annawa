
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

        // 1. Update Units Table
        console.log('Updating units table...');
        try {
            await connection.query(`ALTER TABLE units ADD COLUMN vision LONGTEXT`);
            console.log('Added vision to units');
        } catch (e) { if (e.code !== 'ER_DUP_FIELDNAME') console.log(e.message); }

        try {
            await connection.query(`ALTER TABLE units ADD COLUMN mission LONGTEXT`);
            console.log('Added mission to units');
        } catch (e) { if (e.code !== 'ER_DUP_FIELDNAME') console.log(e.message); }

        // 1b. Update News Table (Add strict Date column)
        try {
            await connection.query(`ALTER TABLE news ADD COLUMN published_at DATE`);
            console.log('Added published_at to news');
        } catch (e) { if (e.code !== 'ER_DUP_FIELDNAME') console.log(e.message); }

        // 2. Unit Sub-tables
        const tables = [
            `CREATE TABLE IF NOT EXISTS unit_facilities (
                id INT AUTO_INCREMENT PRIMARY KEY,
                unit_id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                icon_url VARCHAR(255),
                FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
            )`,
            `CREATE TABLE IF NOT EXISTS unit_activities (
                id INT AUTO_INCREMENT PRIMARY KEY,
                unit_id INT NOT NULL,
                title VARCHAR(255) NOT NULL,
                image_url VARCHAR(255),
                FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
            )`,
            `CREATE TABLE IF NOT EXISTS unit_staff (
                id INT AUTO_INCREMENT PRIMARY KEY,
                unit_id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                position VARCHAR(255),
                photo_url VARCHAR(255),
                FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
            )`,
            `CREATE TABLE IF NOT EXISTS unit_partners (
                id INT AUTO_INCREMENT PRIMARY KEY,
                unit_id INT NOT NULL,
                name VARCHAR(255) NOT NULL,
                logo_url VARCHAR(255),
                FOREIGN KEY (unit_id) REFERENCES units(id) ON DELETE CASCADE
            )`
        ];

        for (const sql of tables) {
            await connection.query(sql);
        }
        console.log('Unit sub-tables created.');

        // 3. Content/History Tables
        await connection.query(`
            CREATE TABLE IF NOT EXISTS content_text (
                key_name VARCHAR(50) PRIMARY KEY,
                content LONGTEXT
            )
        `);
        console.log('content_text table created.');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS history_milestones (
                id INT AUTO_INCREMENT PRIMARY KEY,
                year INT NOT NULL, 
                title VARCHAR(255) NOT NULL,
                description LONGTEXT
            )
        `);
        console.log('history_milestones table created.');

        await connection.query(`
            CREATE TABLE IF NOT EXISTS history_figures (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                role VARCHAR(255),
                photo_url VARCHAR(255)
            )
        `);
        console.log('history_figures table created.');

        // Seed Units if empty (Basic structure)
        const [units] = await connection.query('SELECT * FROM units');
        if (units.length === 0) {
            console.log('Seeding units...');
            const seedUnits = [
                ['PAUD An-Nawa', 'paud', 1],
                ['SDQTA An-Nawa', 'sd', 2],
                ['Pondok Pesantren', 'pondok', 3]
            ];
            for (const u of seedUnits) {
                // Check if exists by slug/id - hardcoding ID for simplicity in seeding
                await connection.query('INSERT IGNORE INTO units (id, name, slug) VALUES (?, ?, ?)', [u[2], u[0], u[1]]);
            }
        }

        console.log('Schema update completed successfully.');

    } catch (error) {
        console.error('Error updating schema:', error);
    } finally {
        if (connection) await connection.end();
    }
}

updateSchema();
