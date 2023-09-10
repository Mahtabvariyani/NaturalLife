const router = require("express").Router();


/* GET home page */
router.get("/orderPage", (req, res) => {
  res.render("orderPage");
});

module.exports = router;
