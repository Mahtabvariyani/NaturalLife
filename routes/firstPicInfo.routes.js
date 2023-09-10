const router = require("express").Router();


/* GET home page */
router.get("/firstPicInfo", (req, res) => {
  res.render("firstPicInfo");
});

module.exports = router;
