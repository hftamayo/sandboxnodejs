//ejemplo de como gestionar los routes, no importa que escriba el usuario
//el route siempre caerá en el segundo
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log("this route alwats run!");
    next();
});

//primer midleware
app.use('/add-product', (req, res, next) => {
    console.log('add-product middleware');
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Add Product page</h1>');
});

//segundo midleware
app.use('/', (req, res, next) => {
    console.log('Another middleware');
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Hello from Express</h1>');
});

app.listen(3005)