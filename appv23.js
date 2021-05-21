//leccion 81 : installing and implementing pug template
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

//definicion de variables globales
//lesson 90: adding layout app.engine('hbs', expressHbs());
app.engine('hbs', expressHbs({
    layoutDir: 'views/layouts',
    defaultLayout: 'main-layout', extname: 'hbs'
}));
app.set('view engine', 'hbs');
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