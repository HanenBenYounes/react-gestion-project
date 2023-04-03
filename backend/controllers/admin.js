const db = require("../models/admin");

exports.createAdmin = async function (req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const admin = await db.create({ username, password });
    res.status(201).send(admin);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchAdmin = async function (req, res) {
  try {
    const admin = await model.find({});
    res.status(200).send(admin);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  try {
    const admin = await model.findByIdAndDelete(id);
    res.status(200).send("admin");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  try {
    const admin = await model.findByIdAndUpdate(req.body);
    res.status(200).send(admin);
  } catch (err) {
    console.log(err);
  }
};
