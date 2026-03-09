import postgres from 'postgres';

// Fallback to hardcoded URL if env var is missing
const connectionString = process.env.POSTGRES_URL ||
  'postgresql://postgres.rddiumtstixycwjzjgxa:b1171EvBJM1rI5Vi@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres';

const sql = postgres(connectionString, { ssl: 'require', max: 10 });

// Compatibility wrapper: mimics pg Pool.query(text, params) API
const pool = {
  async query(text: string, params?: any[]) {
    let rows: any[];
    if (params && params.length > 0) {
      rows = await sql.unsafe(text, params);
    } else {
      rows = await sql.unsafe(text);
    }
    return { rows };
  }
};

export default pool;
