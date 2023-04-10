const db = require("../modules/technicien.module");

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
    const technicien = await db.find({});
    res.status(200).send(technicien);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const technicien = await db.findByIdAndDelete(id);
    res.status(201).send("technicien");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    const Technicien = await db.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(Technicien);
  } catch (err) {
    console.log(err);
  }
};
