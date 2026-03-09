import { spawn } from 'child_process';

const POSTGRES_URL = 'postgresql://postgres.rddiumtstixycwjzjgxa:b1171EvBJM1rI5Vi@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres';

const envs = ['production', 'preview', 'development'];

async function addEnv(env) {
    return new Promise((resolve, reject) => {
        const proc = spawn('npx', ['vercel', 'env', 'add', 'POSTGRES_URL', env], {
            stdio: ['pipe', 'inherit', 'inherit'],
            shell: true
        });
        // Write without newline
        proc.stdin.write(POSTGRES_URL);
        proc.stdin.end();
        proc.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`Exit code ${code} for ${env}`));
        });
    });
}

for (const env of envs) {
    try {
        console.log(`Adding POSTGRES_URL to ${env}...`);
        await addEnv(env);
        console.log(`Done: ${env}`);
    } catch (e) {
        console.log(`Skipped ${env}: ${e.message}`);
    }
}
console.log('All done!');
