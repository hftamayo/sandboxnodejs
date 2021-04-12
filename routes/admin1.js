/*leccion 68: 
filtering paths: las rutas pueden ser iguales pero los metodos de los middleware distintos
*/

const express = require('express');

const router = express.Router();

//admin/add-product -> via GET method
router.get('/add-product', (req, res, next) => {
    //una vez que ya no tenemos otro mware, enviamos a response
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

//admin/add-product -> via POST method
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/');
});

module.exports = router;