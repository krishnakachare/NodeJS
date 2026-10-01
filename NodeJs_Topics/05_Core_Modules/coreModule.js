//Core Modules: Built-in Modules (part of core Node). Eg; path, fs, os, http, util, DNS, crypto etc. 

//---------------------------------------------------------------------------------------------------//
//Path Module
const path = require('path'); //When using core module, we don't not to give './'.

const details = path.parse('C:/Users/swati/Documents/Node_A-Z/coreModule.js');
console.log(details); 
//{
//     root: 'C:/',
//     dir: 'C:/Users/swati/Documents/Node_A-Z',
//     base: 'coreModule.js',
//     ext: '.js',
//     name: 'coreModule'
//   }
console.log("Property Name: ",details.name);

const directoryName = path.join(__dirname);
console.log("Directory Name: ", directoryName); // C:\Users\swati\Documents\Node_A-Z
//OR
const dirName = path.dirname('C:/Users/swati/Documents/Node_A-Z/coreModule.js');
console.log("Dir Name: ", dirName); // C:/Users/swati/Documents/Node_A-Z

const fileName = path.join(__filename);
console.log("File Name: ", fileName); //C:\Users\swati\Documents\Node_A-Z\coreModule.js

const baseName = path.basename(fileName);
console.log("Base Name: ", baseName); //coreModule.js

const extensionName = path.extname(baseName);
console.log("Extension Name: ", extensionName); //.js

//---------------------------------------------------------------------------------------------------//
//File-system Module (fs)
const fs = require('fs');

//Synchronous
fs.copyFileSync("text.txt", "text2.txt"); //Used to copy content from one file to different file.
console.log("New file named text2.txt is created!");

fs.writeFileSync('text3.txt','This is created via fs module'); //Used to create a file and add content. 
fs.writeFileSync('text3.txt','We are overwritting this file content. This is created via fs module.'); //Running it again can overwrite the content that is present in the file.

fs.appendFileSync('text3.txt',' Now we are appending or adding the content'); //Append helps to add the content without touching the old content.

const bufferData = fs.readFileSync('text3.txt'); //We can read the content present in another file.
console.log("Buffered Content: ", bufferData); //If we don't use encoding it will display data in buffer format. Buffer is an additional data type in Node.js. It is not available in browser's JS. It mainly stores binary data. 

const unBufferData = fs.readFileSync('text3.txt', 'utf-8');
console.log("Original Content: ", unBufferData);

const org_data = bufferData.toString(); //We can also achieve the same result by simply converting it into string.
console.log("From toString(): ", org_data);

fs.renameSync('text3.txt', 'readwrite.txt'); //To rename the file.

//fs.unlinkSync('filePath'); It will delete the file.

//fs.rmdirSync('folderPath'); //It will delete the folder/directory.

//Asynchronous
// fs.writeFile('async.txt', 'Creating this file via Async.' ,(err,res)=>{
//  console.log("File is created via Async!");
//  console.log("Error: ",err);
// });

// fs.appendFile('async.txt', ' Adding content via Async.' ,(err,res)=>{
//     console.log("Content appended via Async!");
//     console.log("Error: ",err);
//    });

// fs.readFile('async.txt', 'utf-8' ,(err,res)=>{
// console.log("Content: ",res);
// console.log("Error: ",err);
// });

// fs.rename('bio.txt','challengeFile.txt', (err,res) => {
//     console.log("Error: ",err);
// }); //It will rename the file name.

// fs.unlink("challengeFile.txt", (err,res) => {
//     console.log("File deleted");
//     console.log("Error: ",err);
// }); //It will delete the file.

// fs.rmdir('abc', (err,res) => {
//     console.log("Error: ",err);
// }); //It will delete the folder/directory.

//---------------------------------------------------------------------------------------------------//
//OS (Operating System) Module
const os = require('os');

//To know the architecture of your system:
console.log("Architecture: ",os.arch());

//To know the free memory of your system:
console.log("Free Memory (in bytes): ",os.freemem()); //Dividing it by 1024 3 times will give value in GB.

//To know the total memory of your system:
console.log("Total Memory (in bytes): ",os.totalmem());

//To know the Host name of your system:
console.log("Host Name: ",os.hostname());

//To know the platform of your system:
console.log("Platform Name: ",os.platform());

//To know the Temprory Directory address of your system:
console.log("Temprory Directory Address: ",os.tmpdir());

//To know the Operating system of your system:
console.log("Operating system: ",os.type());

