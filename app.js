"use strict"

const http = require('http');
const hostname = 'localhost';
const port = 3000;

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('{ "mensaje": "Hola Mundo!!"}');
})

.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});