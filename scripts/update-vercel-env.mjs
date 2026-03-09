const url = 'postgresql://postgres.rddiumtstixycwjzjgxa:b1171EvBJM1rI5Vi@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres';

if (url) {
    console.log('Adding URL to Vercel...');
    try {
        // Run vercel env add via child_process
        // Using echo to pipe to vercel env add is more reliable in cross platform scripts
        execSync(`echo "${url}" | npx vercel env add POSTGRES_URL production`, { stdio: 'inherit' });
        execSync(`echo "${url}" | npx vercel env add POSTGRES_URL preview`, { stdio: 'inherit' });
        execSync(`echo "${url}" | npx vercel env add POSTGRES_URL development`, { stdio: 'inherit' });
        console.log('Successfully added POSTGRES_URL to Vercel.');
    } catch (e) {
        console.error('Failed to add env var:', e.message);
    }
} else {
    console.log('No POSTGRES_URL found in .env');
}
