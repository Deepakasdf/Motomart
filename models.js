const bodyparser = require("body-parser");
const jsonparser = bodyparser.json();
const Model = require("./model.js");

module.exports.all = async (req, res) => {
  try {
    const models = await Model.find({});
    res.send({ models });
  } catch {
    res.send("not found");
  }
};

module.exports.new = async (req, res) => {
  try {
    const model = new Model(req.body);
    await model.save();
    res.send({ model });
  } catch {
    res.send("not create");
  }
};

module.exports.show = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Model.findById(id);
    res.send({ model });
  } catch {
    res.send("not found any category to at this particular id");
  }
};

module.exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const editmodel = await Model.findByIdAndUpdate(id);
    res.send({ editmodel });
  } catch {
    res.send("Not able to edit");
  }
};
module.exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletemodel = await Model.findByIdAndDelete(id);
    res.send({ deletemodel });
  } catch {
    res.send("Not able to Delete");
  }
};
