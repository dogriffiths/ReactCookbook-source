const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('build'))

app.post('/endpoint', (request, response) => {
    console.log('Server received data', request.body);
    response.send('OK');
});

app.listen(8000, () => console.log('🚀 Launched on port 8000!'));
