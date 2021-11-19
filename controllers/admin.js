const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;      
  const price = req.body.price;
  const description = req.body.description;

  const product = new Product(
    title,
    imageUrl,        
    price,
    description,
    null,
    req.user._id
  );

  product
    .save()
    .then((result) => {
      console.log("Record successfully created");
      res.redirect("/admin/products");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; //variable tipo String
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findByPk(prodId)
    .then((product) => {
      if (!product) {
        return res.redirect("/");
      }
      res.render("admin/edit-product", {
        pageTitle: "Edit Product",
        path: "/admin/edit-product",
        editing: editMode,
        product: product,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postEditProduct = (req, res, next) => {
  //req.body.<nombreControlenElForm>
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedImageUrl = req.body.imageUrl;  
  const updatedPrice = req.body.price;
  const updatedDesc = req.body.description;

  const product = new Product(
    updatedTitle,
    updatedImageUrl,            
    updatedPrice,
    updatedDesc,    
    prodId
  );

  product
    .save()
    .then((result) => {
      console.log("Product updated");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.render("admin/products", {
        prods: products,
        pageTitle: "Product's Administration",
        path: "/admin/products",
      });
    })
    .catch((err) => console.log(err));
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then(() => {
      console.log("product deleted");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
  res.redirect("/admin/products");
};
