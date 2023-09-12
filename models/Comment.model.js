const { Schema, model } = require("mongoose");

const Commentnew = new Schema(
  {
    Name: {
      type: String,
      required:true
    },
    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const CommentS = model("CommentSchema", Commentnew);

module.exports = CommentS;
