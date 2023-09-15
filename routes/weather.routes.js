const express = require("express");
const router = express.Router();
require("request");
const axios = require("axios");

router.get("/weather", async (req, res) => {
  res.render("index", { weather: null, error: null });
});

router.post("/weather", async (req, res) => {
  const city = req.body.city;
  console.log(city);
  const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d6d0f72fc1a27093423f960188c5bb11`;

  let weather;
  let error = null;
  try {
    const response = await axios.get(APIURL);
    weather = response.data;
  } catch (error) {
    console.error(error);
    weather = null;
    error = "Nothing to show ";
  }
  console.log(weather);

  res.render("index", { weather, error });
});

module.exports = router;
