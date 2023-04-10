const mongoose = require("mongoose");

const boatSchema = new mongoose.Schema(
  {
    name: String,
    number: String,
    gps:String,
    type:String,
    reception_date:String,
    functional_state:String
  },
  {
    timestamps: true,
  }
);

const boat = mongoose.model("boat", boatSchema);
module.exports = boat;
