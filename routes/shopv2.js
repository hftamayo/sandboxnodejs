/*
uso de template pug
*/
const path= require('path');
const express = require('express');
const { schedulingPolicy } = require('cluster');
const rootDir = require('../util/path');
const router = express.Router();

//segundo midleware
router.get('/', (req, res, next) => {
    res.render('shop');
});

module.exports = router;