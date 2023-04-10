const db = require("../modules/capitain.module");
exports.createCapitain = async function (req, res) {
    console.log(req.body);
    const { username, password, phone, mail } = req.body;
    try {
      const Capitain = await db.create({ username, password });
      res.status(201).send(Capitain);
    } catch (err) {
      console.log(err);
    }
  };
  exports.fetchCapitain = async function (req, res) {
    try {
      const Capitain = await db.find({});
      res.status(201).send(Capitain);
    } catch (err) {
      console.log(err);
    }
  };
  exports.delete = async function (req, res) {
    const id = req.params.id;
    try {
      const Capitain = await db.findByIdAndDelete(id);
      res.status(201).send("deleted");
    } catch (err) {
      console.log(err);
    }
  };
  exports.update = async function (req, res) {
    const id = req.params.id;
    try {
      const Capitain = await db.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(201).send(Capitain);
    } catch (err) {
      console.log(err);
    }
  };
  