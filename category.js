const mongoose = require("mongoose");

const pschema = new mongoose.Schema({
  category_name: {
    type: String,
    required: true,
  },

  category_description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  imageurl: {
    type: String,
  },
  category_type: {
    type: String,
  },
  category_id: {
    type: String,
  },
});

module.exports = mongoose.model("Category", pschema);

///  category_id: {
// type: String,
// required: true,
//},
