import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    try {
        // 1. Update History Text
        console.log('1. Updating History Text...');
        const textPayload = { text: "Sejarah pondok pesantren Annawa..." };
        const textRes = await fetch('http://localhost:3000/api/history', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(textPayload)
        });
        console.log('Update Text:', await textRes.json());

        // 2. Upload Figure Photo
        console.log('2. Uploading Figure Photo...');
        const filePath = path.join(__dirname, '../public/annawa.png');
        if (!fs.existsSync(filePath)) {
            console.error('File not found:', filePath);
            return;
        }

        const blob = new Blob([fs.readFileSync(filePath)], { type: 'image/png' });
        const formData = new FormData();
        formData.append('file', blob, 'figure.png');

        const uploadRes = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData
        });
        const uploadData = await uploadRes.json();
        console.log('Upload Photo:', uploadData);

        // 3. Create Figure
        console.log('3. Creating Figure...');
        const figurePayload = {
            name: "Test Figure",
            role: "Pendiri",
            photo: uploadData.url
        };
        const figureRes = await fetch('http://localhost:3000/api/history/figures', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(figurePayload)
        });
        console.log('Create Figure:', await figureRes.json());

        // 4. Create Milestone
        console.log('4. Creating Milestone...');
        const milestonePayload = {
            year: "2000",
            title: "Pendirian",
            description: "Pondok didirikan..."
        };
        const milestoneRes = await fetch('http://localhost:3000/api/history/milestones', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(milestonePayload)
        });
        console.log('Create Milestone:', await milestoneRes.json());

    } catch (e) {
        console.error('Error:', e);
    }
}

run();
