
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
        // Filter for NIK or NIS
        const relevant = rows.filter(r => r.Field === 'nik' || r.Field === 'nis');
        console.table(relevant);
        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

describeTable();
