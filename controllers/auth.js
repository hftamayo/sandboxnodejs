exports.getLogin = (req, res, next) => {
  //si la cookie no existe, esta variable da error
  const isLoggedIn = req
  .get("Cookie")
  .split(";")[1]
  .trim()
  .split("=")[1] === 'true';
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly"); //HttpOnly = previene XSS
  res.redirect("/");
};
