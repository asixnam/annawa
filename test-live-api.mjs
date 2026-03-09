import https from 'https';

const data = JSON.stringify({ email: 'super@local', password: 'pass' });

const options = {
    hostname: 'annawa.vercel.app',
    path: '/api/auth/login',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    }
};

const req = https.request(options, (res) => {
    console.log('Status:', res.statusCode);
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        console.log('Response:', body);
        try {
            console.log('Parsed:', JSON.stringify(JSON.parse(body), null, 2));
        } catch (e) { }
    });
});

req.on('error', (e) => console.error('Error:', e));
req.write(data);
req.end();
