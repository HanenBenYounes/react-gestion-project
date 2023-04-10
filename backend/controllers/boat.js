const db = require("../modules/boat.module");

exports.createBoat = async function (req, res) {
  console.log(req.body);
  const { name, number, gps, type, reception_date, functional_state } = req.body;
  try {
    const Boat = await db.create({ name, number, gps, type, reception_date, functional_state });
    res.status(201).send(Boat);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchBoat = async function (req, res) {
  try {
    const Boat = await db.find({});
    res.status(201).send(Boat);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const Boat = await db.findByIdAndDelete(id);
    res.status(201).send("deleted");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    const Boat = await db.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(Boat);
  } catch (err) {
    console.log(err);
  }
};
