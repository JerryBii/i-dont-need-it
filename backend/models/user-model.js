const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    weeklySpent: { type: Number, required: true },
    monthlySpent: { type: Number, required: true },
    monthlyLimit: { type: Number, required: true },
    weeklyLimit: { type: Number, required: true },
    totalProducts: { type: Number, required: true },
    weeklyItemsNotPurchased: { type: Number, required: true },
    monthlyItemsNotPurchased: { type: Number, required: true },
    weeklySaved: { type: Number, required: true },
    monthlySaved: { type: Number, required: true },
    purchases: [
      {
        _id: false,
        dateTime: { type: Date },
        product: { type: String },
        price: { type: Number },
        category: { type: String },
        store: { type: String },
      },
    ],
    avoidanceList: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
