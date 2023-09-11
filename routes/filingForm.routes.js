const router = require("express").Router();
const nodemailer = require("nodemailer");


router.get("/filingForm", (req, res) => {

  res.render('filingForm');
});

router.post('/send',(req,res)=>{
  const outPut= `
  <p>You have new Text</p>
  <h3>Contact Detail</h3>
  <ul>
  <li>fullName: ${req.body.fullName}</li>
  <li>email: ${req.body.email}</li>
  <li>phone: ${req.body.phone}</li>
  <li>message: ${req.body.message}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `;


  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "mahtabvariyani@gmail.com",
      pass: "gbxchdoisuzijxgl",
    },
    tls:{
      rejectUnauthorized:false
    }
  });
  
  const mailOptions = {
    from: req.body.email,
    to: "mahtabvariyani@gmail.com",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    text: req.body.text,
    html:outPut
  };

  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return  console.log(error);
    } else {
      console.log("Email sent:", info.response);
      res.render('filingForm',{msg:'email has been sent'})
    }
  });

})






module.exports = router;
