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

async function testUpsert() {
    try {
        const text = 'Test history content ' + new Date().toISOString();
        console.log('Testing upsert with text:', text);

        const result = await sql.unsafe(
            `INSERT INTO content_text (key_name, content) VALUES ($1, $2) 
             ON CONFLICT (key_name) DO UPDATE SET content = EXCLUDED.content RETURNING *`,
            ['history', text]
        );

        console.log('Upsert result:', result);
        process.exit(0);
    } catch (e) {
        console.error('Upsert failed:', e);
        process.exit(1);
    }
}

testUpsert();
