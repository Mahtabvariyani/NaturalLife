const router = require("express").Router();


/* GET home page */
router.get("/signIn", (req, res) => {
  res.render("signIn");
});

module.exports = router;
