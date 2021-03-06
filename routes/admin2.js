const path= require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

//admin/add-product -> via GET method
router.get('/add-product', (req, res, next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));    
});

router.get('/add-category', (req, res, next) => {
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-category.html'));    
});
//admin/add-product -> via POST method
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

router.post('/add-category', (req, res, next) => {
    console.log(req.body)
    res.redirect('/vcategory');
});

module.exports = router;