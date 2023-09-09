const router = require("express").Router();


/* GET home page */
router.get("/filingForm", (req, res) => {
  res.render("filingForm");
});

module.exports = router;
