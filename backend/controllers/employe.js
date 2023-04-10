const db = require("../modules/employe.module");

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
    const employe = await db.find({});
    res.status(200).send(employe);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  const id = req.params.id;
  console.log (id);
  try {
    const employe = await db.findByIdAndDelete(id);
    res.status(201).send("employe");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    const Employe = await db.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(Employe);
  } catch (err) {
    console.log(err);
  }
};
