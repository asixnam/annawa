import postgres from 'postgres';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

const connectionString = process.env.POSTGRES_URL ||
    'postgresql://postgres.rddiumtstixycwjzjgxa:b1171EvBJM1rI5Vi@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres';

const sql = postgres(connectionString, { ssl: 'require' });

async function checkTables() {
    try {
        const rows = await sql`
            SELECT table_name 
            FROM information_schema.tables 
            WHERE table_schema = 'public'
            AND table_name IN ('content_text', 'history_milestones', 'history_figures')
        `;
        console.log('Found tables:', rows.map(r => r.table_name));
        process.exit(0);
    } catch (e) {
        console.error('Error checking tables:', e);
        process.exit(1);
    }
}

checkTables();
