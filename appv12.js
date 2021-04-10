//leccion 64: parsing incoming requests
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

//primer midleware
app.use('/add-product', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});
/*
en lugar que este middleware siempre se ejecute usaremos la funcion post
la cual se ejecutará cuando existen un method post
tambien se puede usar get, put, tc
*/
app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

//segundo midleware
app.use('/', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Hello from Express</h1>');
});

app.listen(3005)