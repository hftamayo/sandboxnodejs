const express = require('express');

const router = express.Router();

//segundo midleware
router.get('/', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<hl>Hello from Express</h1>');
});

module.exports = router;