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






const signupRoutes = require("./routes/signUp.routes");
app.use("/", signupRoutes);




const reviewPageRoutes = require("./routes/reviewPage.routes");
app.use("/", reviewPageRoutes);











require("./error-handling")(app);







module.exports = app;
