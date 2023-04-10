const db = require("../modules/admin.module");

exports.createAdmin = async function (req, res) {
  console.log(req.body);
  const { username, password } = req.body;
  try {
    const Admin = await db.create({ username, password });
    res.status(201).send(Admin);
  } catch (err) {
    console.log(err);
  }
};
exports.fetchAdmin = async function (req, res) {
  try {
    const Admin = await db.find({});
    res.status(201).send(Admin);
  } catch (err) {
    console.log(err);
  }
};
exports.delete = async function (req, res) {
  const id = req.params.id;
  try {
    const Admin = await db.findByIdAndDelete(id);
    res.status(201).send("deleted");
  } catch (err) {
    console.log(err);
  }
};
exports.update = async function (req, res) {
  const id = req.params.id;
  try {
    const Admin = await db.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(201).send(Admin);
  } catch (err) {
    console.log(err);
  }
};
