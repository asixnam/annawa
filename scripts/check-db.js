
import mysql from 'mysql2/promise';

async function checkStudents() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        const [rows] = await connection.execute('SELECT id, name, unit, registration_year, gender FROM students');
        console.log('Total students:', rows.length);
        if (rows.length > 0) {
            console.table(rows);
        } else {
            console.log('No students found in the database.');
        }
        await connection.end();
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

checkStudents();
