const db = require("../models/employe");

exports.createEmploye = async function (req, res) {
  console.log(req.body);
  const { username, password, phone, mail } = req.body;
  try {
    const employe = await db.create({ username, password, phone, mail });
    res.status(201).send(employe);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchEmploye = async function (req, res) {
  try {
    const employe = await model.find({});
    res.status(200).send(employe);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  try {
    const employe = await model.findByIdAndDelete(id);
    res.status(200).send("employe");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  try {
    const employe = await model.findByIdAndUpdate(req.body);
    res.status(200).send(employe);
  } catch (err) {
    console.log(err);
  }
};
