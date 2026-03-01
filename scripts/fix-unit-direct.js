import mysql from 'mysql2/promise';

async function fix() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        const [result] = await connection.execute("UPDATE students SET unit = 'SANTRI' WHERE unit IS NULL");
        console.log('Fixed unit:', result.affectedRows, 'rows updated.');
        await connection.end();
    } catch (error) {
        console.error('Error updating unit:', error);
    }
}

fix();
