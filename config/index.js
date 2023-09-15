const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
const favicon = require("serve-favicon");
const jsonwebtoken = require("jsonwebtoken");
const path = require("path");

module.exports = (app) => {
  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(bodyParser.json());

  app.set("views", path.join(__dirname, "..", "views"));

  app.set("view engine", "hbs");

  app.use(express.static(path.join(__dirname, "..", "public")));

  app.use(
    favicon(path.join(__dirname, "..", "public", "images", "favicon.ico"))
  );
};
