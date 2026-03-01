import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    try {
        console.log('Starting News Feature Test...');

        // 1. Upload Image
        console.log('1. Uploading Image...');
        const filePath = path.join(__dirname, '../public/annawa.png');
        if (!fs.existsSync(filePath)) {
            console.error('File not found:', filePath);
            return;
        }

        const blob = new Blob([fs.readFileSync(filePath)], { type: 'image/png' });
        const formData = new FormData();
        formData.append('file', blob, 'news-test.png');

        const uploadRes = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData
        });
        const uploadData = await uploadRes.json();
        console.log('Upload Result:', uploadData);

        // 2. Create News
        console.log('2. Creating News...');
        const createPayload = {
            title: "Test Berita Otomatis",
            content: "Ini adalah konten berita testing.",
            image_url: uploadData.url,
            type: "Berita",
            is_published: true,
            created_at: new Date().toISOString().slice(0, 19).replace('T', ' ')
        };

        const createRes = await fetch('http://localhost:3000/api/news', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createPayload)
        });
        const createData = await createRes.json();
        console.log('Create Result:', createData);
        const newsId = createData.id;

        // 3. Update News
        if (newsId) {
            console.log(`3. Updating News ID: ${newsId}...`);
            const updatePayload = {
                title: "Test Berita Updated",
                content: "Konten telah diperbarui.",
                type: "Pengumuman"
            };

            const updateRes = await fetch(`http://localhost:3000/api/news/${newsId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatePayload)
            });
            console.log('Update Result:', await updateRes.json());
        }

    } catch (e) {
        console.error('Error:', e);
    }
}

run();
