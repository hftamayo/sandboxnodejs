//leccion 91: uso de ejs
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const mongoConnect = require("./util/database").mongoConnect;
const User = require("./models/user");

const app = express();

//definicion de variables globales
app.set("view engine", "ejs");
app.set("views", "views");


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");


app.use(bodyParser.urlencoded({ extended: false }));
//serving main.css statically
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {

  User.findById("61267055e959b8480f230d12")
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
    
   next();
});


app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoConnect(() => {
  app.listen(3005);


});

