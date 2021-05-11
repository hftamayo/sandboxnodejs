//leccion 81 : installing and implementing pug template
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//definicion de variables globales
app.set('view engine', 'pug');
app.set('views', 'views');


const adminData = require('./routes/admin3');
const shopRoutes = require('./routes/shopv2');
app.use(bodyParser.urlencoded({extended: false}));
//serving main.css statically
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);//solo las rutas que inicien con /admin se redirigen a adminRoutes
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error404.html'));
});

app.listen(3005)