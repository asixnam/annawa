import mysql from 'mysql2/promise';

async function migrate() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'annawa'
        });

        const columns = [
            'file_ktp VARCHAR(255)',
            'file_kk VARCHAR(255)',
            'file_akta VARCHAR(255)',
            'file_ijazah VARCHAR(255)',
            'file_foto VARCHAR(255)'
        ];

        for (const col of columns) {
            try {
                await connection.execute(`ALTER TABLE students ADD COLUMN ${col}`);
                console.log(`Added ${col}`);
            } catch (e) {
                if (e.code === 'ER_DUP_FIELDNAME') {
                    console.log(`Column ${col.split(' ')[0]} already exists.`);
                } else {
                    console.error(`Error adding ${col}:`, e);
                }
            }
        }

        await connection.end();
    } catch (error) {
        console.error('Migration error:', error);
    }
}

migrate();
