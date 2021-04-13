/*
la libreria path ayuda a construir las referencias absolutas
hacia los scripts js, caso contrario, si nosotros ponemos './views/shop.html'
node.js buscará en el sistema operativo esta ubicacion partiendo de /
*/
const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');

const router = express.Router();

//segundo midleware
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
});

module.exports = router;