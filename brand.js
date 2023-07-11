const mongoose = require("mongoose");

const newschema = new mongoose.Schema({
  car_brand: {
    type: String,
    required: true,
  },
  car_description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Brand", newschema);
