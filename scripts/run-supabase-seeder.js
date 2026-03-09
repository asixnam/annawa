import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL // Now reads from .env reliably
});

async function seed() {
    console.log('Starting data seeding...');
    try {
        // 1. Seed Units
        console.log('Checking units table...');
        const { rows: units } = await pool.query('SELECT * FROM units');
        if (units.length === 0) {
            console.log('Seeding units...');

            // Replicating exactly what was in update-schema-about.js
            const seedUnits = [
                { id: 1, name: 'PAUD An-Nawa', slug: 'paud', description: 'Pendidikan Anak Usia Dini', image_url: null, vision: '[]', mission: '[]' },
                { id: 2, name: 'SDQTA An-Nawa', slug: 'sd', description: "Sekolah Dasar Qur'an Tahfidz Alam", image_url: null, vision: '[]', mission: '[]' },
                { id: 3, name: 'Pondok Pesantren', slug: 'pondok', description: 'Pondok Pesantren An-Nawa', image_url: null, vision: '[]', mission: '[]' }
            ];

            for (const u of seedUnits) {
                await pool.query(
                    'INSERT INTO units (id, name, slug, description, image_url, vision, mission) VALUES ($1, $2, $3, $4, $5, $6, $7) ON CONFLICT (slug) DO NOTHING',
                    [u.id, u.name, u.slug, u.description, u.image_url, u.vision, u.mission]
                );
            }
            console.log('Units seeded.');
        } else {
            console.log('Units already exist.');
        }

        // 2. Create and Seed Users if needed
        console.log('Checking users table...');
        // We first need to make sure 'users' table exists since it wasn't in our migrate script
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                role VARCHAR(50) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);

        const { rows: users } = await pool.query('SELECT * FROM users WHERE email = $1', ['super@local']);
        if (users.length === 0) {
            console.log('Seeding Super Admin...');
            await pool.query(
                `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4)`,
                ['Super Admin', 'super@local', 'pass', 'super']
            );
            console.log('Super Admin created: super@local / pass');
        } else {
            console.log('Super Admin already exists.');
        }

        // 3. Create missing tables (News, Kajian, Gallery, Testimonials) found in setup-db.js
        console.log('Creating other core tables...');

        // News Table
        await pool.query(`
          CREATE TABLE IF NOT EXISTS news (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            slug VARCHAR(255) NOT NULL UNIQUE,
            content TEXT,
            image_url VARCHAR(255),
            author_id INT REFERENCES users(id) ON DELETE SET NULL,
            is_published BOOLEAN DEFAULT true,
            published_at DATE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        // Kajian Table
        await pool.query(`
          CREATE TABLE IF NOT EXISTS kajian (
            id SERIAL PRIMARY KEY,
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
        await pool.query(`
          CREATE TABLE IF NOT EXISTS gallery (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255),
            image_url VARCHAR(255) NOT NULL,
            category VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        // Testimonials Table
        await pool.query(`
          CREATE TABLE IF NOT EXISTS testimonials (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            role VARCHAR(100),
            content TEXT,
            avatar_url VARCHAR(255),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        // Students Table
        await pool.query(`
          CREATE TABLE IF NOT EXISTS students (
            id SERIAL PRIMARY KEY,
            nis VARCHAR(50) UNIQUE,
            name VARCHAR(255) NOT NULL,
            unit VARCHAR(50),
            status VARCHAR(50) DEFAULT 'active',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        console.log('Seeding completed successfully!');
    } catch (error) {
        console.error('Seeding failed:', error);
    } finally {
        await pool.end();
    }
}

seed();
