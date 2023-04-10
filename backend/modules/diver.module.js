const mongoose = require("mongoose");

const diverSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    phone:String,
    mail:String,
    birth_date:String,
  },
  {
    timestamps: true,
  }
);

const diver = mongoose.model("diver", diverSchema);
module.exports = diver;
