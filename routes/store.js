const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

//midlewares
router.get('/', (req, res, next) => {
    console.log('data from store.js', adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;