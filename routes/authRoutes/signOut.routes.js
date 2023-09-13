const router = require("express").Router();

router.post('/signOut', (req, res, next) => {
    console.log(req)
    req.session.destroy(err => {
      if (err) next(err);
      res.redirect('/authViews/signIn');
    });
  });

  module.exports = router;