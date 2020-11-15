const express = require('express');
const app = express();
const cities = require('./cities');

app.use(express.json());

app.get('/search', (request, response) => {
    response.send(cities);
});

app.listen(5000, () => console.log('🚀 Launched on port 5000!'));
