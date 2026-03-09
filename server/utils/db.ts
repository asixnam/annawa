import pkg from 'pg';
const { Pool } = pkg;

// Initialize a connection pool to PostgreSQL (Supabase)
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL // Make sure this is set to the Supabase connection string
});

export default pool;
