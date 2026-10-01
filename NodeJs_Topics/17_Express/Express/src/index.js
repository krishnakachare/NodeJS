const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

//Routing
app.get("/", (request,response)=>{
    response.send("Landing Page");
});

app.get("/about", (request,response)=>{
    response.send("About Us");
});

app.get("/contact", (request,response)=>{
    response.send("Contact Us: abc@gmail.com");
});

app.get("/calculator", (request,response) => {
    response.sendFile(__dirname + "/index.html");
});

app.post("/calculator", (request,response) => {
    let n1 = Number(request.body.v1);
    let n2 = Number(request.body.v2);
    let sum = n1+ n2;
    response.send("The sum of the two number is : "+sum);
});

app.get("/bmi", (request,response) => {
    response.sendFile(__dirname + "/bmi.html");
});

app.post("/bmi", (request,response) => {
    let weight = Number(request.body.weight);
    let height = Number(request.body.height);
    let BMI = weight/(height*height);
    response.send("The BMI is : "+BMI);
});


app.listen(4500, (request,response) => {
    console.log("Server is running at port 4500");
})
