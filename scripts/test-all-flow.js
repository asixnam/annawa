import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    try {
        console.log('Starting Testimonials & Unit Profile Test...');

        // 1. Upload Helper
        async function uploadFile(name) {
            const filePath = path.join(__dirname, '../public/annawa.png');
            if (!fs.existsSync(filePath)) throw new Error('File not found: ' + filePath);

            const blob = new Blob([fs.readFileSync(filePath)], { type: 'image/png' });
            const formData = new FormData();
            formData.append('file', blob, name);

            const res = await fetch('http://localhost:3000/api/upload', { method: 'POST', body: formData });
            const data = await res.json();
            return data.url;
        }

        const imageUrl = await uploadFile('test-img.png');
        console.log('Image Uploaded:', imageUrl);

        // 2. Testimonials
        console.log('\n--- Testing Testimonials ---');
        const testimonialPayload = {
            name: "Santri Test Batch",
            batch: "Angkatan 2025",
            role: "Alumni 2020",
            content: "Pondok ini sangat bagus.",
            avatar_url: imageUrl
        };
        const testRes = await fetch('http://localhost:3000/api/testimonials', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(testimonialPayload)
        });
        const testData = await testRes.json();
        console.log('Create Testimonial:', testData);

        if (testData.id) {
            // Verify Fetch by ID
            console.log('Fetching Testimonial by ID:', testData.id);
            const fetchRes = await fetch(`http://localhost:3000/api/testimonials/${testData.id}`);
            const fetchedData = await fetchRes.json();
            console.log('Fetched Data:', fetchedData);

            const updateRes = await fetch(`http://localhost:3000/api/testimonials/${testData.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content: "Updated content" })
            });
            console.log('Update Testimonial:', await updateRes.json());
        }

        // 3. Unit Profile (Sub-entity: Facilities)
        // Assuming Unit ID 1 exists (Pondok)
        console.log('\n--- Testing Unit Facilities ---');
        const unitId = 1;
        const facilityPayload = {
            name: "Gedung Baru",
            icon: imageUrl // UI sends 'icon' -> mapped to 'icon_url' in backend
        };

        const facRes = await fetch(`http://localhost:3000/api/units/${unitId}/facilities`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(facilityPayload)
        });
        // Note: success might return the object or ID depending on API
        // If it fails with 404/500 we'll see
        try {
            const facData = await facRes.json();
            console.log('Create Facility:', facData);
        } catch (e) {
            console.log('Create Facility Failed (Status):', facRes.status);
        }

    } catch (e) {
        console.error('Error:', e);
    }
}

run();
