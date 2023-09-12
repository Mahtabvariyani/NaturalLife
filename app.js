
require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
require("./config")(app);
require('./config/session.config')(app);


const capitalize = require("./utils/capitalize");

const projectName = "NaturalLife";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

//Question is it okay if i put to directory??
const filingFormRoutes = require("./routes/formsRoutes/filingForm.routes");
app.use("/formViews", filingFormRoutes);
app.use("/", filingFormRoutes);

  
const signInRoutes = require("./routes/authRoutes/signIn.routes");
app.use("/authViews", signInRoutes);
app.use("/", signInRoutes);

const ProfileDashBoardRoutes = require("./routes/userRoutes/ProFDash.routes");
app.use("/userView", ProfileDashBoardRoutes);
app.use("/", ProfileDashBoardRoutes);

const forgetPassRoutes = require("./routes/forgetPass.routes");
app.use("/", forgetPassRoutes);

//Question
const signupRoutes = require("./routes/authRoutes/signUp.routes");
app.use("/authViews", signupRoutes);
app.use("/", signupRoutes);



const signOutRoutes = require("./routes/authRoutes/signOut.routes");
app.use("/authViews", signOutRoutes);
app.use("/", signOutRoutes);



const reviewPageRoutes = require("./routes/userRoutes/reviewPage.routes");
app.use("/", reviewPageRoutes);
app.use("/userView", reviewPageRoutes);

const orderPageRoutes = require("./routes/formsRoutes/orderPage.routes");
app.use("/", orderPageRoutes);

const firstPicInfoRoutes = require("./routes/firstPicInfo.routes");
app.use("/", firstPicInfoRoutes);

require("./error-handling")(app);
module.exports = app;
