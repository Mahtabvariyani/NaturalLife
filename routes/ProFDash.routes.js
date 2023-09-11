const router = require("express").Router();

router.get("/ProFDash", (req, res) => {
  res.render("ProFDash");
});



module.exports = router;
