//leccion 64: parsing incoming requests
const express = require('express');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
/*
el orden importa: si pongo mis adminRoutes despues de /, nunca se van a ejecutar pues esta usando use.
pero cuando ya tengo la shopRoutes, como usa el metodo get, el orden no importa
*/
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3005)