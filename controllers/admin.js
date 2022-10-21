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
  const imageUrl = req.body.image;
  const description = req.body.description;
  const price = req.body.price;
  
  const product = new Product({
    title: title,
    price: price,
    description: description,
    imageUrl: imageUrl,
    userId: req.user, //mongoose filtra el objeto para extraer el id
  });

  product
    .save()
    .then((result) => {
      console.log("Record successfully created");
      res.redirect("/admin/products");
    })
    .catch((err) => {
/*       return res.status(500).render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: false,
        hasError: true,
        product: {
          title: title,
          imageUrl: imageUrl,
          price: price,
          description: description,
        },
        errorMessage: 'Database operation failed',
        validationErrors: []
      }); */
      res.redirect('/500');
    });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit; //variable tipo String
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  Product.findById(prodId)
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

  Product.findById(prodId)
    .then((product) => {
      if (product.userId.toString() !== req.user._id.toString()) {
        return res.redirect("/");
      }
      product.title = updatedTitle;
      product.price = updatedPrice;
      product.description = updatedDesc;
      product.imageUrl = updatedImageUrl;
      return product.save().then((result) => {
        console.log("Product updated");
        res.redirect("/admin/products");
      });
    })
    .catch((err) => console.log(err));
};

exports.getProducts = (req, res, next) => {
  Product.find({ userId: req.user._id })
    /*
  .select('title price imageUrl -id')
    .populate("userId", "name") //fetching all user info as an object
    */
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
  Product.deleteOne({ _id: prodId, userId: req.user._id })
    .then(() => {
      console.log("product deleted");
      res.redirect("/admin/products");
    })
    .catch((err) => console.log(err));
};
