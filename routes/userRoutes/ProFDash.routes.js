const router = require("express").Router();
const path = require("path");
const uploader = require("../../utils/cloudinary.js");
const UserModel = require("../../models/User.model.js");
const {
  isLoggedIn,
  isLoggedOut,
} = require("../../routes/middleware/route-guard");

router.post("/ProFDash", uploader.single("imageUrl"), (req, res, next) => {
  console.log("file is: ", req.file);
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  } else {
    const image = req.file.path;
    UserModel.findByIdAndUpdate(req.session.currentUser._id, {
      image,
    })
      .then((user) => {
        res.redirect("/ProFDash");
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

router.get("/ProFDash", (req, res) => {
  if (req.session.currentUser) {
    const id = req.session.currentUser._id;
    UserModel.findById(id).then((user) => {
      console.log(user);
      res.render("userView/ProFDash", { user, orderCount: user.orderCount });
    });
  } else {
    res.redirect("/authViews/signIn");
  }
});

module.exports = router;
