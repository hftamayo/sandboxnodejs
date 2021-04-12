//leccion 68: filtering paths
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin1');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);//solo las rutas que inicien con /admin se redirigen a adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send("<h1>Page not found</h1>")
});

app.listen(3005)