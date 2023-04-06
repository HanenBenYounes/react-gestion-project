const mongoose =require ('mongoose')
const employeSchema= new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    mail: String,
})
const employe = mongoose.model("employe", employeSchema)
module.exports = employe