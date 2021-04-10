const express = require('express');

const router = express.Router();

//primer midleware
router.get('/add-product', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;