import https from 'https';

const options = {
    hostname: 'annawa.vercel.app',
    path: '/api/debug',
    method: 'GET'
};

const req = https.request(options, (res) => {
    console.log('Status:', res.statusCode);
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        console.log('Response:', body);
    });
});

req.on('error', (e) => console.error('Error:', e));
req.end();
