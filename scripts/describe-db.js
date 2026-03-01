
import mysql from 'mysql2/promise';

async function describeTable() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        const [rows] = await connection.execute('DESCRIBE students');
        console.table(rows);
        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

describeTable();
