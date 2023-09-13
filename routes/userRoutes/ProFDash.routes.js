const router = require("express").Router();
// const multer = require("multer");
const path = require("path");
// const cloudinary = require('cloudinary').v2;
const uploader = require('../../utils/cloudinary.js');
const UserModel = require("../../models/User.model.js");





// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "images");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });
router.post('/ProFDash', uploader.single("imageUrl"), (req, res, next) => {
  console.log('file is: ', req.file)
 if (!req.file) {
   next(new Error('No file uploaded!'));
   return;
 }
 //You will get the image url in 'req.file.path'
 //store that in the DB  

 else{
  const image = req.file.path;
  UserModel.findByIdAndUpdate(req.session.currentUser._id,{
    image
   
  })
  .then(user =>{
    res.redirect('/ProFDash')
  })
  .catch(error=>{
    console.log(error)
  })
 }


})



//week 5 -day 4 custom middleware 

router.get("/ProFDash", (req, res) => {
  if (req.session.currentUser) {
    const id = req.session.currentUser._id;
    UserModel.findById(id)
    .then(user=>{
      console.log(user);
      res.render("userView/ProFDash", { user });
    })
 
  } else {
    res.redirect("/authViews/signIn");
  }
});




// router.post("/ProFDash", uploader.single("image"), (req, res) => {
//   if (req.session.currentUser) {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "No file uploaded",
//       });
//     }

//     cloudinary.uploader.upload(req.file.path, (err, result) => {
//       if (err) {
//         console.error("Cloudinary upload error:", err);
//         return res.status(500).json({
//           success: false,
//           message: "Error uploading to Cloudinary",
//           error: err, // Include the error object for debugging
//         });
//       }

//       res.status(200).json({
//         success: true,
//         message: "Uploaded!",
//         data: result,
//       });
//     });
//   } else {
//     res.redirect("/authViews/signIn");
//   }
// });


module.exports = router;
