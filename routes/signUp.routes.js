const router = require("express").Router();


/* GET home page */
router.get("/signUp", (req, res) => {
  res.render("signUp");
});

module.exports = router;
