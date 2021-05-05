/*
la libreria path ayuda a construir las referencias absolutas
hacia los scripts js, caso contrario, si nosotros ponemos './views/shop.html'
node.js buscará en el sistema operativo esta ubicacion partiendo de /
*/
const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const router = express.Router();

//midlewares
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/vcategory', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'category.html'));
});

module.exports = router;