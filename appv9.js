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
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Hello from Express</h1>');
});

app.listen(3005)