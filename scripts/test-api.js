
async function testApi() {
    try {
        const response = await fetch('http://localhost:3000/api/students?unit_id=SANTRI');
        const data = await response.json();
        console.log('API Response Status:', response.status);
        console.log('API Response Data:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error fetching API:', error);
    }
}

testApi();
