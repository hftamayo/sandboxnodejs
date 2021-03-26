//ejecucion de la aplicacion con express.js instalado
const http = require('http');

const express = require('express');

const app = express();
//use agrega una funcion midleware
app.use((req, res, next) => {
    console.log('Executing middleware');
    //para ejecutar el siguiente request middleware debo usar next
    next();
});
//segundo midleware
app.use((req, res, next) => {
    console.log('Another middleware');
});

const server = http.createServer(app);

server.listen(3005);