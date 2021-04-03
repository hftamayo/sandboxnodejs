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

app.use('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

//segundo midleware
app.use('/', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Hello from Express</h1>');
});

app.listen(3005)