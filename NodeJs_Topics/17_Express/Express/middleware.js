//There are 3 kinds of Middleware: 1.In-built 2.Local(User defined.) 3.Community(External)

const express = require('express');
const fs = require('fs');

const app = express();

//Middleware gets executed everytime or runs for every route.
app.use((req,res,next) => {
    console.log("Hello from Middleware");
    next(); //next takes compiler to the next thing that needs to be executed.
})

const timeLogger = (req,res,next) => {
    const startTime = new Date().getTime()
    next()
    const endTime = new Date().getTime()
    console.log(`It took ${endTime-startTime}ms to give the response`);
}

const routeLogger = (req,res,next) => {
    fs.appendFileSync("./routeDetails.txt", `Route Visited: ${req.url} | Method: ${req.method}\n`)
    next()
}

app.use(timeLogger);
app.use(routeLogger);

app.get("/",(req,res) => {
    res.send("HOME PAGE");
})

app.get("/about",(req,res) => {
    res.send("ABOUT PAGE");
})

app.get("/contacts",(req,res) => {
    res.send("CONTACTS PAGE");
})

app.get("/data",(req,res) => {
    let data = fs.readFileSync("./data.json", "utf-8")
    res.send(data);
})

app.listen(4500,(req,res)=>{
    console.log("Server is running at 4500");
})

//Community middleware: CORS(Cross Origin Resource Sharing), Multer
//app.use(cros); //Allows to share resources.

//Query String: The Query String module used to provide utilities for parsing and formatting URL query strings.

//req.query