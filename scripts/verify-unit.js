import mysql from 'mysql2/promise';

async function verify() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        console.log("Checking for unit = 'SANTRI'...");
        const [rows] = await connection.execute("SELECT id, name, unit FROM students WHERE unit = 'SANTRI'");
        console.log('Found rows:', rows.length);
        console.table(rows);

        console.log("Checking for all rows...");
        const [allRows] = await connection.execute("SELECT id, name, unit FROM students");
        console.table(allRows);

        await connection.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

verify();
