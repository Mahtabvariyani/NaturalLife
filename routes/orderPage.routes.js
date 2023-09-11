const router = require("express").Router();
const nodemailer = require("nodemailer");

/* GET home page */
router.get("/orderPage", (req, res) => {
  res.render("orderPage");
});

// router.post('/some',(req,res)=>{
  
//   const detail = `
  
//   <p>You have a new Order</p>
//   <h3>Details:</h3>
//   <ul>
//   <li> firstName :${req.body.firstName}</li>
//   <li>  lastName:${req.body.lastName}</li>
//   <li>  email:${req.body.email}</li>
//   <li> phone :${req.body.phone}</li>
//   <li> docreciep :${req.body.docreciep}</li>
//   <li>  detail:${req.body.detail}</li>
//   <li>  address:${req.body.address}</li>
//   <li>  city:${req.body.city}</li>
//   <li>  region:${req.body.region}</li>
//   <li> postal :${req.body.postal}</li>
//   <li>  country:${req.body.country}</li>
//   <li>  checkbox:${req.body.checkbox}</li>
  
//   </ul>
  
//   `;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: "mahtabvariyani@gmail.com",
//       pass: "gbxchdoisuzijxgl",
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });

//   const mailOptions = {
   
//     from: req.body.email,
//     to: "mahtabvariyani@gmail.com",
//     subject: `Message from ${req.body.firstName}: ${req.body.lastName}`,
//     text: req.body.detail,
//     html:detail
   
//   };


//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return  console.log(error);
//     } else {
//       console.log("Email sent:", info.response);
//       res.render('orderPage',{msg:'email has been sent'})
//     }
//   });

// })



module.exports = router;
