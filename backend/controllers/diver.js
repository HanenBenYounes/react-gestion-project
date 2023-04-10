const db = require("../modules/diver.module");

exports.createDiver = async function (req, res) {
  console.log(req.body);
  const { username, password, phone, mail, birth_date } = req.body;
  try {
    const Diver = await db.create({ username, password });
    res.status(201).send(Diver);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchDiver = async function (req, res) {
  try {
    const Diver = await db.find({});
    res.status(201).send(Diver);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const Diver = await db.findByIdAndDelete(id);
    res.status(201).send("deleted");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    const Diver = await db.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(Diver);
  } catch (err) {
    console.log(err);
  }
};
