// Import Mongoose
const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
    {
        firstName: {
            type: String,
            required:true
          },
  lastName: {
    type: String,
    required:true
   } ,
  email: {
    type:String,
    required:true,
  },
  phone: {
    type:Number,
    required:true,
  },
  docreciep:{
    type:String,
    required:true,
  },
  detail:{
    type:String,
    required:true,
  },
  address: {
    type:String,
    required:true,
  },
  city: {
    type:String,
    required:true,
  },
  region: {
    type:String,
    required:true,
  },
  postal: {
    type:String,
    required:true,
  },
  country: {
    type:String,
    required:true,
  },
  checkbox: {
    type:Boolean,
    required:true,
  },
});

const Order = model('Order', orderSchema);

module.exports = Order;
