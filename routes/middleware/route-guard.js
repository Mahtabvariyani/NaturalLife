const isLoggedIn = (req, res, next) => {
  if (!req.session.currentUser) {
    return res.redirect("/signIn");
  }
  next();
};

const isLoggedOut = (req, res, next) => {
  if (req.session.currentUser) {
    return res.redirect("/signUp");
  }
  next();
};

module.exports = {
  isLoggedIn,
  isLoggedOut,
};
