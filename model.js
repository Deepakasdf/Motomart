const mongoose = require("mongoose");

const dschema = new mongoose.Schema({
  car_model: {
    type: String,
    required: true,
  },
  car_price: {
    type: String,
    required: true,
  },
  createdat: {
    type: Date,
    default: Date.now,
    timestamps: true,
    required: true,
  },
  updatedat: {
    type: Date,
    default: Date.now,
    timestamps: true,
    required: true,
  },
});

module.exports = mongoose.model("Model", dschema);
