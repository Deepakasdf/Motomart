const mongoose = require("mongoose");
const dschema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
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
  address: {
    type: String,
    required: true,
  },
  joindate: {
    type: Date,
    default: Date.now,
    timestamps: true,
    required: true,
  },
  lastorderdate: {
    type: Date,
    default: Date.now,
    timestamps: true,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", dschema);
