const mongoose = require("mongoose");

const capitainSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    phone:String,
    mail:String,
   
  },
  {
    timestamps: true,
  }
);

const capitain = mongoose.model("capitain", capitainSchema);
module.exports = capitain;
