//leccion 91: uso de ejs
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//definicion de variables globales
app.set('view engine', 'ejs');
app.set('views', 'views');


const adminData = require('./routes/admin4');
const shopRoutes = require('./routes/shopv4');
app.use(bodyParser.urlencoded({ extended: false }));
//serving main.css statically
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminData.routes);//solo las rutas que inicien con /admin se redirigen a adminRoutes
app.use(shopRoutes);


app.use((req, res, next) => {
    res.status(404).render('error404', { pageTitle: 'Page not found' });
});

app.listen(3005)