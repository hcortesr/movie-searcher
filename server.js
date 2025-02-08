// https://www.omdbapi.com/


const { error } = require('console');
const express = require('express');
const { request } = require('http');
const app = express();
const pg = require('pg')

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

app.get('/get', (req, res) => {
    const { search } = req.query;
    const url = new URL('http://www.omdbapi.com/?apikey=b939813f&');
    url.searchParams.append('t', search);
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