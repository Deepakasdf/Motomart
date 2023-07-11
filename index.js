if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const { config } = require("dotenv");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const seesion = require("express-session");
const jsonparser = bodyparser.json();
const Category = require("./category.js");
const User = require("./user.js");
const Model = require("./model.js");
const Brand = require("./brand.js");
const routeropen = require("./router.js");
//const seed1 = require("./seed1.js");
//const seed2 = require("./seed2.js");
//const seed3 = require("./seed3.js");
const dotenv = require("dotenv");
const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(
  seesion({
    secret: "hi have a secret",
    resave: true,
    saveUninitialized: true,
  })
);

const dburl = process.env.DB_URL.concat(process.env.DatabaseName);

main().catch((err) => console.log(err));

async function main() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(dburl);
  console.log("done");
}

app.use("/Motomart", routeropen);

app.listen(4100, () => {
  console.log("ok");
});
