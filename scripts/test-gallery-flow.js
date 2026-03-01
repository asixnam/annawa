import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    try {
        // 1. Upload
        console.log('1. Uploading file...');
        const filePath = path.join(__dirname, '../public/annawa.png'); // Adjust path if needed
        if (!fs.existsSync(filePath)) {
            console.error('File not found:', filePath);
            return;
        }

        const blob = new Blob([fs.readFileSync(filePath)], { type: 'image/png' });
        const formData = new FormData();
        formData.append('file', blob, 'annawa.png');

        const uploadRes = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData
        });

        if (!uploadRes.ok) {
            console.error('Upload failed:', await uploadRes.text());
            return;
        }

        const uploadData = await uploadRes.json();
        console.log('Upload success:', uploadData);

        const imageUrl = uploadData.url;

        // 2. Create Gallery Item
        console.log('2. Creating gallery item with URL:', imageUrl);
        const payload = {
            title: "Test Script Entry",
            image_url: imageUrl,
            category: "Juara",
            author: "Tester",
            description: "Created via test script"
        };

        const createRes = await fetch('http://localhost:3000/api/gallery', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!createRes.ok) {
            console.error('Create failed:', await createRes.text());
            return;
        }

        const createData = await createRes.json();
        console.log('Create success:', createData);

    } catch (e) {
        console.error('Error:', e);
    }
}

run();
