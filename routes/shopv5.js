/*
uso de template pug
*/
const path = require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const adminData = require('./admin5');
const router = express.Router();

//segundo midleware
router.get('/', (req, res, next) => {
    //leccion 82: outputting dynamic content
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop Best products',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

router.get('/category', (req, res, next) => {
    const categories = categoryData.categories;
    res.render('category', {
        cats: categories,
        pageTitle: 'Shop Best products',
        path: '/category',
        hasProducts: categories.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;