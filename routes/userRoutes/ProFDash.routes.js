const router = require("express").Router();
const User = require('../../models/User.model');
const multer = require('multer');
const path = require('path');

const storage =multer.diskStorage({
  destination : (req,file,cd)=>{
          cd(null,'images')
  },
  filename:(req,file,cd)=>{
    console.log(file)
    cd(null,Date.now()+path.extname(file.originalname))
  }
})
const ProFDash = multer({ storage: storage }); 


router.get("/ProFDash", (req, res) => {
  res.render("/userView/ProFDash");
});
router.get('/ProFDash', (req, res) => {
  res.render('userView/ProFDash', { userInSession: req.session.currentUser });
});


router.post("/ProFDash", ProFDash.single('image'), (req, res) => {
  res.render("userView/ProFDash");
});


module.exports = router;
