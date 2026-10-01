//Mongoose helps in 1.Connection (Server to Database), 2.Validation (checking everything) and 3.Structure

const mongoose = require('mongoose')

const main = async() => {
    try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/practise")
    // console.log("Connected to MongoDB");
    console.log("Connected to Database");
    //CREATE
    // await StudentModel.insertMany([{name:"Tanu", age:23, city: "Mumbai"}])
    // const student = new StudentModel({ //To insert one data recommended by Mongoose.
    //     name:"Akki", 
    //     age:20, 
    //     city: "Kolkata"
    // })
    // await student.save()
    // console.log("Inserted the data");
    //READ
    console.log("Following is the data from DB");
    // const students = await StudentModel.find() :To read everything.
    const students = await StudentModel.find({$and:[{age:{$gte:19}},{age:{$lte:23}}]})
    console.log(students);
    //DELETE
    // await StudentModel.deleteMany({$and:[{age:{$gte:19}},{age:{$lte:23}}]})
    // console.log("DELETED");
    //To disconnect
    // connection.disconnect()
    // console.log("Disconnected to MongoDB");
    }
    catch(err){
        console.log(err);
    }
}

main()

//Structure: 1.Schema(structure), 2. Constructor function(model) and 3. Data(and put into Database)

//Creating structure of the data:
const studentSchema = mongoose.Schema({
    name: String,
    // name: {type:String, required: true} //To make it required
    age: Number,
    city: String
},{
    // versionKey:false: Version Key keeps a track of updation. To not mention version in document.
})

//Creating constructor function:
const StudentModel = mongoose.model("student",studentSchema)

//Validation: 
//The following output are on basis if the structure is name: String and age: Number.
//if name: 56 it will store as name: "56" using typecasting it got converted.
//but if age : "Thirty one" it will throw an error as cannot validate.
//again if age: "34" it will store as age: 34

