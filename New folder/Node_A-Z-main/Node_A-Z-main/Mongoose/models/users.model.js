const mongoose = require('mongoose')

//Basic Structure
const userSchema = mongoose.Schema({
    name: {type:String, required:true},
    age: {type:Number, required:true},
    city: {type:String, required:true},
    language: {type:String, required:true},
    is_married: {type:Boolean, required:true},
},{
    versionKey: false
})

//Model for the data
const UserModel = mongoose.model("user",userSchema)

module.exports = {
    UserModel
}