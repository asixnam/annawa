
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

async function setup() {
    let connection;
    try {
        // First connect without database to create if not exists
        connection = await mysql.createConnection({
            host: config.host,
            user: config.user,
            password: config.password,
        });

        console.log(`Creating database ${config.database} if not exists...`);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\``);
        await connection.query(`USE \`${config.database}\``);

        console.log('Creating tables...');

        // Users Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role VARCHAR(50) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Students Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nis VARCHAR(50) UNIQUE,
        name VARCHAR(255) NOT NULL,
        unit VARCHAR(50),
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // News/Berita Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS news (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        content TEXT,
        image_url VARCHAR(255),
        author_id INT,
        is_published BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL
      )
    `);

        // Kajian Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS kajian (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        description TEXT,
        video_url VARCHAR(255),
        thumbnail_url VARCHAR(255),
        ustadz_name VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Gallery Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        image_url VARCHAR(255) NOT NULL,
        category VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Testimonials Table
        await connection.query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        role VARCHAR(100),
        content TEXT,
        avatar_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

        // Units Table (for dynamic unit info on landing page)
        await connection.query(`
      CREATE TABLE IF NOT EXISTS units (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        slug VARCHAR(100) NOT NULL UNIQUE,
        description TEXT,
        image_url VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);


        console.log('Seeding initial data...');

        // Check if super admin exists
        const [rows] = await connection.query('SELECT * FROM users WHERE email = ?', ['super@local']);
        if (Array.isArray(rows) && rows.length === 0) {
            // Password should be hashed in production, but for now simple string as per request context implication or use placeholder
            // Using 'pass' as password for consistency with current hardcoded auth
            await connection.query(`
            INSERT INTO users (name, email, password, role) 
            VALUES ('Super Admin', 'super@local', 'pass', 'super')
        `);
            console.log('Super Admin created: super@local / pass');
        } else {
            console.log('Super Admin already exists.');
        }

        console.log('Database setup completed successfully.');

    } catch (error) {
        console.error('Error setup database:', error);
    } finally {
        if (connection) await connection.end();
    }
}

setup();
