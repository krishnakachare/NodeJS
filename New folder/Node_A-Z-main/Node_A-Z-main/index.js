//Import and Export File (Also refer to sqaure.js)

// const square = {
//     area : (a) => (a*a),
//     perimeter : (a) => (4*a)
// }

//Everything in Node.js runs inside this function. It is same like global object of JavaScript. This is called Module Wrapper function. That's why every file in Node is called a module and each of their scope is private.

// (function (exports, require, module, __filename, __direname){
    
// })

console.log("File Name: ", __filename); //C:\Users\swati\Documents\Node_A-Z\index.js
console.log("Directory Name: ",__dirname); //C:\Users\swati\Documents\Node_A-Z

//File-based Modules: We can access any file using module.export and require function.
const square = require('./square'); //When using file-based module, we need to give './' for navigation.
//const {area, perimeter, add} = require('./square'); //Common method

const calSqaure = (a) => {
    console.log(`The value of a is ${a} and it's area is ` + square.area(a));
    console.log(`The value of a is ${a} and it's peri is ` + square.perimeter(a));
}
calSqaure(5); //The value of a is 5 and it's area is 25 The value of a is 5 and it's peri is 20

console.log(square.add(5,5)); //Using sqaure because add in inside a file called square. The alternate is if we require in this manner: const {area, perimeter, add} = require('./square');. No need to use filename now.
