import pool from '../utils/db';

async function fix() {
    try {
        const [result] = await pool.query("UPDATE students SET unit = 'SANTRI' WHERE unit IS NULL");
        console.log('Fixed unit:', result.affectedRows, 'rows updated.');
    } catch (e) {
        console.error(e);
    } finally {
        process.exit();
    }
}

fix();
