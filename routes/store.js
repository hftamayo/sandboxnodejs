const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin3');

//midlewares
router.get('/', (req, res, next) => {
    console.log('data from store.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/vcategory', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'category.html'));
});

module.exports = router;