// https://www.omdbapi.com/


const { error } = require('console');
const express = require('express');
const { request } = require('http');
const app = express();
const pg = require('pg')



new pg.Pool({
    user: 'admin_user',
    host: 'dpg-cugnapjv2p9s73cl72dg-a',
    port: 5432,
    database: 'movies_stored',
    password: 'IcziI70PuPNTtXqnxAXVLo1088rg3uFX'

})

app.get('/', (req, res) => {
    res.sendFile('./res/index.html', {
        root: __dirname,
    })
});

app.get('/search', (req, res) => {
    const { search } = req.query;
    const url = new URL('http://www.omdbapi.com/?apikey=b939813f&');
    url.searchParams.append('s', search);
    fetch(url, { method: 'get' })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(error => {
            res.send("Hubo un error", error);
        })

});



app.listen(3000);
console.log("http://localhost:3000/");