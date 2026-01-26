//Express is built over http module of node only.
//It is not an inbuilt module of node, so we have to install it using npm.
//Express: Fast, Unopinionated, Minimalist web framework for Node.js.
//Several popular Node.js framework are built on Express: Eg; Nestjs, Feathers etc.

const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json()); //Middleware: Used to parse the json data.

app.get("/", (request,response)=>{
    response.setHeader("Content-Type","text/html")
    response.end("<h1>HOME PAGE</h1>"); //response.send() will also work.
})

app.get("/data", (request,response)=>{
    //response.setHeader("Content-Type","application/json")
    const dataStream = fs.createReadStream("./data.json","utf-8");
    dataStream.pipe(response);
})

app.post("/adddata", (request,response)=>{
    console.log(request.body);
    response.send("Data has been added");
})

app.get("/info", (request,response)=>{
    const dataStream = fs.createReadStream("./info.json","utf-8");
    dataStream.pipe(response);
})

app.get("/students", (request,response)=>{
    const data= fs.readFileSync("./info.json","utf-8");
    const parsedData = JSON.parse(data)
    console.log(parsedData.students);
    response.send(parsedData.students);
})

app.get("/teachers", (request,response)=>{
    const data= fs.readFileSync("./info.json","utf-8");
    const parsedData = JSON.parse(data)
    console.log(parsedData.teachers);
    response.send(parsedData.teachers);
})

app.post("/addstudents", (request,response)=>{
    //Step 1: Get the complete data.
    const data= fs.readFileSync("./info.json","utf-8");
    //Step 2: Parse the data.
    const parsedData = JSON.parse(data);
    //Step 3: Add the data in student.
    parsedData.students.push(request.body);
    //Step 4: Add it to the data file.
    fs.writeFileSync("./info.json", JSON.stringify(parsedData));
    console.log(parsedData);
    response.send("Data has been added, look in the terminal!");
})

app.delete("/deletestudent", (request,response)=>{
    //Step 1: Get the complete data.
    const data= fs.readFileSync("./info.json","utf-8");
    //Step 2: Parse the data.
    const parsedData = JSON.parse(data);
    //Step 3: Delete/Filter the required data in student.
    const newData = parsedData.students.filter((element) => {
        return element.name !== "Munnu";
    });
    //Display the newData
    console.log(newData);
    response.send("Data has been deleted, look in the terminal!");
})

app.listen(4500, () => {
    console.log("Server is running at port 4500");
})

