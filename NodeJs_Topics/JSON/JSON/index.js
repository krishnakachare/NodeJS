//JSON (Javascript Object Notation) is a lightweight format for storing and transporting data. It is often used when data is sent from a web server to web page.

const obj = {
    name : "Aman",
    age: 26,
    location: "Pune"
}

console.log(obj.location); //Pune

//To convert an object to JSON
const json = JSON.stringify(obj);
console.log(json); //{"name":"Aman","age":26,"location":"Pune"}

//To convert a JSON to object
const objAgain = JSON.parse(json);
console.log(objAgain); //{ name: 'Aman', age: 26, location: 'Pune' }

//File system with JSON : Add json data in another file
const fs = require('fs');

// fs.writeFile('json1.json', json,  (err) => {
//     console.log('Done');
// })

//Now, let's assume json1.json is an api file, we will try to read it now.
fs.readFile('json1.json', 'utf-8', (err,data) => {
    console.log("API from json1: ", data);

    //Now again convert it into object.
    const orgData = JSON.parse(data);
    console.log("Data in object form: ",orgData);
})

