
const BASE_URL = 'http://localhost:3000';

async function testAuthorFlow() {
    console.log('--- Testing Author Management Flow (Native Fetch) ---');

    try {
        // 1. Create Author
        console.log('Creating author...');
        const createRes = await fetch(`${BASE_URL}/api/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'Test Author',
                email: `test_author_${Date.now()}@test.com`,
                password: 'password123',
                role: 'author',
                bio: 'Test bio',
                phone: '08123456789'
            })
        });

        if (!createRes.ok) throw new Error(`Create failed: ${createRes.statusText}`);
        const createData = await createRes.json();
        const authorId = createData.id;
        console.log('Author created with ID:', authorId);

        // 2. Fetch Author
        console.log('Fetching author details...');
        const getRes = await fetch(`${BASE_URL}/api/users/${authorId}`);
        if (!getRes.ok) throw new Error(`Fetch failed: ${getRes.statusText}`);
        const getData = await getRes.json();
        console.log('Fetched Data:', getData);

        // 3. Update Author
        console.log('Updating author...');
        const updateRes = await fetch(`${BASE_URL}/api/users/${authorId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: 'verified',
                bio: 'Updated bio after verification',
                name: 'Test Author (Verified)'
            })
        });
        if (!updateRes.ok) throw new Error(`Update failed: ${updateRes.statusText}`);
        console.log('Author updated.');

        // 4. Verify Update
        console.log('Verifying update...');
        const verifyRes = await fetch(`${BASE_URL}/api/users/${authorId}`);
        const verifyData = await verifyRes.json();
        if (verifyData.status === 'verified' && verifyData.name === 'Test Author (Verified)') {
            console.log('✅ Flow Success: Data correctly updated and retrieved.');
        } else {
            console.log('❌ Flow Failed: Data mismatch.', verifyData);
        }

        // 5. Delete Author
        console.log('Cleaning up...');
        const deleteRes = await fetch(`${BASE_URL}/api/users/${authorId}`, { method: 'DELETE' });
        if (!deleteRes.ok) throw new Error(`Delete failed: ${deleteRes.statusText}`);
        console.log('Author deleted.');

    } catch (error) {
        console.error('❌ Error during testing:', error.message);
    }
}

testAuthorFlow();
