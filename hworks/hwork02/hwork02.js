//hwork02:
//if I point to / I get the error message: CANNOT GET /
const express = require('express');

const app = express();
/*
app.use('/', (req, res, next) => {
    console.log("This is a message from the main middleware route!");
    next();
});

//segundo midleware
app.use('/users', (req, res, next) => {
    console.log('this is a message from users middleware route');
    res.send('<hl>Add User page</h1>');
});
*/

//approach based on 3rd requirement
//si pongo de segundo a /users, nunca se va a mostrar
//esto se llama "filters"
app.use('/users', (req, res, next) => {
    console.log('this is a message from users middleware route');
    res.send('<hl>Add User page</h1>');
});

//segundo midleware
app.use('/', (req, res, next) => {
    console.log("This is a message from the main middleware route!");
    res.send('<hl>Welcome to the root page</h1>');
});

app.listen(3005)