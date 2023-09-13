const { Schema, model } = require('mongoose');
 require('../models/Order.model'); 

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: [true, 'Username is required.'],
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.'],
    },
    image: {
      type: String,
      default: 'https://t4.ftcdn.net/jpg/02/15/84/43/360_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg',
    },
    order: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    },
  },
  {
    timestamps: true,
  }
);


userSchema.virtual('orderCount').get(function () {
  return this.order ? this.order.length : 0;
});

module.exports = model('User', userSchema);
