//para referenciar clases se usa letra mayuscula
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product',
        {
            pageTitle: 'Adding Product',
            path: '/admin/add-product',
            formsCSS: true,
            productCSS: true,
            activeAddProduct: true
        });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Shop Best products',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};