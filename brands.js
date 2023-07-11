const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const Brand = require("./brand.js");

module.exports.all = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.send({ brands });
  } catch {
    res.send("not found");
  }
};

module.exports.new = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    await brand.save();
    res.send({ brand });
  } catch {
    res.send("not create");
  }
};

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const brand = await Brand.findById(id);
    res.send({ brand });
  } catch {
    res.send("not found any category to at this particular id");
  }
};

module.exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const editbrand = await Brand.findByIdAndUpdate(id);
    res.send({ editbrand });
  } catch {
    res.send("Not able to edit");
  }
};
module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletebrand = await Brand.findByIdAndDelete(id);
    res.send({ deletebrand });
  } catch {
    res.send("Not able to Delete");
  }
};
