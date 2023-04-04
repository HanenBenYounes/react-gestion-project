const mongoose =require ('mongoose')
const technicienSchema= new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    mail: String,
})
const technicien = mongoose.model("technicien", technicienSchema)
module.export = technicien