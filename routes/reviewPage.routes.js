const router = require("express").Router();


/* GET home page */
router.get("/reviewPage", (req, res) => {
  res.render("reviewPage");
});

module.exports = router;
