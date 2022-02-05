const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    totalSpent: { type: Number, required: true },
    monthLimit: { type: Number, required: true },
    weekLimit: { type: Number, required: true },
    totalProducts: { type: Number, required: true },
    purchases: [
      {
        _id: false,
        dateTime: { type: Date },
        product: { type: String },
        price: { type: Number },
        tag: { type: String },
      },
    ],
    blacklist: [
      {
        tag: { type: String },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
