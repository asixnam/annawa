
import mysql from 'mysql2/promise';

async function describeUnit() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        const [rows] = await connection.execute("SHOW COLUMNS FROM students LIKE 'unit'");
        console.table(rows);
        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

describeUnit();
