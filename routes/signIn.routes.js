const router = require("express").Router();
const User = require('../models/User.model');
const bcryptjs = require('bcryptjs');


/* GET home page */
router.get("/signIn", (req, res) => {
  res.render("signIn");
});

router.post('/signIn', (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body)
  if (email === '' || password === '') {
    res.render('signIn', {
      errorMessage: 'Please enter both, email and password to login.'
    });
    return;
  }
  User.findOne({ email: email })

    .then(user => {
      console.log(user);
      console.log('Email:', email);
      console.log('Password:', password);
      if (!user) {
        console.log("Email not registered. ");
        res.render('signIn', { errorMessage: 'user not found.' });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
  

        res.render('ProFDash', { user });
      } else {
        console.log("Incorrect password. ");
        res.render('signIn', { errorMessage: 'incorrect password.' });
      }
    })
    .catch(error => next(error));
});











module.exports = router;
