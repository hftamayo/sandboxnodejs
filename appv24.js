//leccion 91: uso de ejs
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const db = require('./util/datalayer');

const app = express();

//definicion de variables globales
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM products')
.then((result) => {
    console.log(result);

})
.catch((err) => {
    console.log(err);

});

app.use(bodyParser.urlencoded({ extended: false }));
//serving main.css statically
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3005)