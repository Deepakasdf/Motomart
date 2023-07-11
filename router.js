const express = require("express");
const router = express.Router();
const Category = require("./category.js");
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const categories = require("./categories");
const brands = require("./brands");
const models = require("./models.js");
const auth = require("./auth.js");
const jwt = require("jsonwebtoken");
const verify = require("./verifyToken");

router.get("/categories", jsonparser, categories.all);
router.post("/categories", jsonparser, categories.new);
router.get("/categories/:id", jsonparser, categories.show);
router.put("/categories/:id/edit", jsonparser, categories.edit);
router.delete("/categories/:id", jsonparser, categories.delete);

router.get("/brands", jsonparser, brands.all);
router.post("/brands", jsonparser, brands.new);
router.get("/brands/:id", jsonparser, brands.show);
router.put("/brands/:id/edit", jsonparser, brands.edit);
router.delete("/brands/:id", jsonparser, brands.delete);

router.get("/models", jsonparser, models.all);
router.post("/models", jsonparser, models.new);
router.get("/models/:id", jsonparser, models.show);
router.put("/models/:id/edit", jsonparser, models.edit);
router.delete("/models/:id", jsonparser, models.delete);

router.get("/register", auth.register);
router.post("/register", jsonparser, auth.registerpost);
router.get("/login", auth.login);
router.post("/login", auth.postlogin);
router.get("/logout", auth.logout);
router.get("/token", verify, auth.token);
module.exports = router;
