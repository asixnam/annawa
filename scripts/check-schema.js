import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

async function checkSchema() {
    const connection = await mysql.createConnection(dbConfig);
    try {
        const [rows] = await connection.execute('DESCRIBE students');
        console.log(rows);
    } catch (error) {
        console.error(error);
    } finally {
        await connection.end();
    }
}

checkSchema();
