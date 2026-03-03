import { createPool } from '@vercel/postgres'

// Initialize a connection pool to Vercel Postgres
const pool = createPool({
  connectionString: process.env.POSTGRES_URL // Vercel injects this environment variable automatically
})

export default pool
