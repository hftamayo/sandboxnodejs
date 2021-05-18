/*
uso de template pug
*/
const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const adminData = require('./admin4');
const router = express.Router();

//segundo midleware
router.get('/', (req, res, next) => {
    //leccion 82: outputting dynamic content
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop Best products', path: '/'});
});

module.exports = router;