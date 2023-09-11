const express = require("express");
const app = express();

require("dotenv").config();

require("./config")(app);

require("./db");


const hbs = require("hbs");

const capitalize = require("./utils/capitalize");

app.use(express.static('public'));


const projectName = "NaturalLife";



app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);



const filingFormRoutes = require("./routes/filingForm.routes");
app.use("/", filingFormRoutes);



const signInRoutes = require("./routes/signIn.routes");
app.use("/", signInRoutes);



const ProfileDashBoardRoutes = require("./routes/ProFDash.routes");
app.use("/", ProfileDashBoardRoutes);



const forgetPassRoutes = require("./routes/forgetPass.routes");
app.use("/", forgetPassRoutes);





const signupRoutes = require("./routes/signUp.routes");
app.use("/", signupRoutes);




const reviewPageRoutes = require("./routes/reviewPage.routes");
app.use("/", reviewPageRoutes);



const orderPageRoutes = require("./routes/orderPage.routes");
app.use("/", orderPageRoutes);





const firstPicInfoRoutes = require("./routes/firstPicInfo.routes");
app.use("/", firstPicInfoRoutes);






require("./error-handling")(app);







module.exports = app;
