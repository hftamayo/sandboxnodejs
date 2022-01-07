//leccion 91: uso de ejs
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const errorController = require("./controllers/error");
//const User = require("./models/user");

const app = express();

//definicion de variables globales
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
//serving main.css statically
app.use(express.static(path.join(__dirname, "public")));

// app.use((req, res, next) => {
//   User.findById("61267055e959b8480f230d12")
//     .then((user) => {
//       req.user = new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch((err) => console.log(err));
// });

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect(
  "mongodb+srv://node:Node123$@nodecluster.hfnls.mongodb.net/shop?retryWrites=true&w=majority"
).then(result => {
  app.listen(3005);
}).catch(err => {
  console.log(err);
});
