//leccion 71 y 73 : returning 404 error page
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRoutes = require('./routes/admin2');
const storeRoutes = require('./routes/store');
app.use(bodyParser.urlencoded({extended: false}));
//serving main.css statically
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);//solo las rutas que inicien con /admin se redirigen a adminRoutes
app.use(storeRoutes);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error404.html'));
});

app.listen(3005)