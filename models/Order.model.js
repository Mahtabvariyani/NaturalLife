// Import Mongoose
const { Schema, model } = require("mongoose");
const user = require("../models/User.model");

const orderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },

  detail: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  postal: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  select: {
    type: Number,
    required: true,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
