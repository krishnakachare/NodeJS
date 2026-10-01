const express = require('express')
const {connection} = require("./db")
const {userRouter} = require("./routes/users.routes")
require('dotenv').config()

const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Welcome!")
})

app.use("/users",userRouter)

app.listen(process.env.port, async() => {
    try{
    await connection
    console.log("Connected to DB");
    }
    catch(err){
        console.log("Cannot connected to DB");
        console.log(err);
    }
    console.log(`Server running at port ${process.env.port}`);
})