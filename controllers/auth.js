exports.getLogin = (req, res, next) => {
  //si la cookie no existe, esta variable da error
  /*
  const isLoggedIn = req
  .get("Cookie")
  .split(";")[1]
  .trim()
  .split("=")[1] === 'true';
  */
 console.log(req.session.isLoggedIn);
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  //gestion por cookies: res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly"); //HttpOnly = previene XSS
  req.session.isLoggedIn = true;
  res.redirect("/");
};
