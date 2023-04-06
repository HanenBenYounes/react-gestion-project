const db = require("../models/technicien");

exports.createTechnicien = async function (req, res) {
  console.log(req.body);
  const { username, password, phone, mail } = req.body;
  try {
    const technicien = await db.create({ username, password, phone, mail });
    res.status(201).send(technicien);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchTechnicien = async function (req, res) {
  try {
    const technicien = await model.find({});
    res.status(200).send(technicien);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  try {
    const technicien = await model.findByIdAndDelete(id);
    res.status(200).send("technicien");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  try {
    const technicien = await model.findByIdAndUpdate(req.body);
    res.status(200).send(technicien);
  } catch (err) {
    console.log(err);
  }
};
