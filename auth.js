const mongoose = require("mongoose");
const User = require("./user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const session = require("express-session");
const verify = require("./verifyToken");
const bodyparser = require("body-parser");

module.exports.register = async (req, res) => {
  res.send("ok get request is working");
};

module.exports.registerpost = async (req, res) => {
  const {
    username,
    password,
    email,
    phone,
    address,
    joindate,
    lastorderdate,
    userid,
  } = req.body;

  const hash = await bcrypt.hash(password, 12);
  const hash1 = await bcrypt.hash(userid, 10);

  const user = new User({
    username,
    password: hash,
    email,
    phone,
    address,
    joindate,
    lastorderdate,
    userid: hash1,
  });
  await user.save();
  res.send(req.body);
};

module.exports.login = async (req, res) => {
  res.send("login page");
};

module.exports.postlogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({
    username,
  });

  const validate = await bcrypt.compare(password, user.password);
  const accessToken = jwt.sign(JSON.stringify(user), process.env.TOKEN_SECRET);
  if (validate) {
    req.session.user_id = user._id;
    res.json({ accessToken: accessToken });
  } else {
    res.send("something went wrong");
  }
};

module.exports.token = async (req, res) => {
  res.json({
    posts: {
      title: "Check token",
      body: "You have access to go ahead",
    },
  });
};

module.exports.logout = async (err, req, res) => {
  req.session.destroy();

  if (err) {
    res.send("error");
  } else {
    res.send("ok all set");
    next();
  }
};
