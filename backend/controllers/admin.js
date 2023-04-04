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
