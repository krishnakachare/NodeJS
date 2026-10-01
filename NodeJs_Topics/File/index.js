//This challenge is based on CRUD operation using fs module. 
console.log('Hey, Async');
const fs = require('fs');

fs.writeFile('bio.txt','This is Challenge 2', (err,res) => {
    console.log("Error: ",err);
});

fs.appendFile('bio.txt',' and I am loving it!', (err,res) => {
    console.log("Error: ",err);
});

fs.readFile('bio.txt', 'utf-8',(err,res) => {   
    console.log("Data: ",res);
    console.log("Error: ",err);
});

fs.rename('bio.txt','challengeFile.txt', (err,res) => {
    console.log("Error: ",err);
});

// fs.unlink("challengeFile.txt", (err,res) => {
//     console.log("File deleted");
//     console.log("Error: ",err);
// }); //It will delete the file.

// fs.rmdir('abc', (err,res) => {
//     console.log("Error: ",err);
// }); //It will delete the folder/directory.



