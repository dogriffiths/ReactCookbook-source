const express = require('express');
const app = express();
const cities = require('./cities');

app.use(express.json());

app.get('/search', (request, response) => {
    const terms = request.query.terms.toUpperCase();
    response.send(cities.filter(c => {
        return (c.name.toUpperCase().indexOf(terms.toUpperCase()) !== -1)
            || (c.state.toUpperCase().indexOf(terms.toUpperCase()) !== -1);
    }));
});

app.listen(5000, () => console.log('🚀 Launched on port 5000!'));
