const router = require("express").Router();
const bcryptjs = require('bcryptjs');
const saltRounds = 10;
const User = require('../models/User.model');


/* GET home page */
router.get("/signUp", (req, res) => {
  res.render("signUp");
});

router.post('/signup', (req, res, next) => {
  // console.log("The form data: ", req.body);
 
  const { username, email, password } = req.body;
 
  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        username,
        email,
        passwordHash: hashedPassword
      });
    })
    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/ProFDash');
    })
    .catch(error => next(error));
});

module.exports = router;
