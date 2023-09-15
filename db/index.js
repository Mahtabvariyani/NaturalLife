
const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URI =process.env.MONGODB_URI;
//MONG_URI
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const databaseName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${databaseName}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
