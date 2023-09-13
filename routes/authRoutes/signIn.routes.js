const router = require("express").Router();
const User = require("../../models/User.model");
const bcryptjs = require("bcryptjs");

router.get("/signIn", (req, res) => {
  res.render("authViews/signIn");
});

router.post("/signIn", (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || password === "") {
    res.render("authViews/signIn", {
      errorMessage: "Please enter both, email and password to login.",
    });
    return;
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        res.render("authViews/signIn", { errorMessage: "user not found." });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        req.session.currentUser = user;
        // const orderCount = user.orderCount;
        res.redirect("/ProFDash");
      } else {
        res.render("authViews/signIn", { errorMessage: "incorrect password." });
      }
    })
    .catch((error) => next(error));
});

module.exports = router;
