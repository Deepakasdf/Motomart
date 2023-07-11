const Category = require("./category.js");
const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const bcrypt = require("bcrypt");

module.exports.all = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.send({ categories });
  } catch {
    res.send("not found");
  }
};

module.exports.new = async (req, res) => {
  const category = new Category({
    category_name: req.body.category_name,
    category_description: req.body.category_description,
  });
  category.category_id = await bcrypt.hash(category.category_name, 12);
  await category.save();
  res.send({ category });
};

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    res.send({ category });
  } catch {
    res.send("not found any category to at this particular id");
  }
};

module.exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const editcategory = await Category.findByIdAndUpdate(id);
    res.send({ editcategory });
  } catch {
    res.send("Not able to edit");
  }
};
module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletecategory = await Category.findByIdAndDelete(id);
    res.send({ deletecategory });
  } catch {
    res.send("Not able to Delete");
  }
};
