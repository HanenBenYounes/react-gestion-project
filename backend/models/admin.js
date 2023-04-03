const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const admin = mongoose.model("admin", adminSchema);
module.export = admin;
