const fetch = require('node-fetch');
const express = require('express');
const app = express();
const port = 3000;


app.get('/proxy', async (request, response, next) => {
    
    try {
        const serviceResponse = await fetch(request.query.url);
        const json = await serviceResponse.json();
        //console.log(json);
        //console.log(typeof response.send);
        response.json(json);
    } catch (err) {
        console.log('Fetch error:', err);
    }
})

app.listen(port, (err) => {
    if (err) {
        return console.log('ERROR', err);
    }

    console.log(`server is listening on port ${port}`);
})