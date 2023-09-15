const router = require("express").Router();
const {
  isLoggedIn,
  isLoggedOut,
} = require("../../routes/middleware/route-guard");

router.get("/signOut", isLoggedOut, (req, res) =>
  res.render("authViews/signUp")
);

router.post("/signOut", (req, res, next) => {
  console.log(req);
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect("/");
  });
});

module.exports = router;
