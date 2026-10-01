//This challenge is based on CRUD operation using fs module. 

const fs = require('fs');

fs.writeFileSync('bio.txt','This is Challenge 1');

fs.appendFileSync('bio.txt',' and I am loving it!');

const readFile = fs.readFileSync('bio.txt', 'utf-8');
console.log(readFile);

const renameFile = fs.renameSync('bio.txt','challengeFile.txt');

//fs.unlinkSync('challengeFile.txt'); It will delete the file.

fs.rmdirSync('abc'); //It will delete the folder/directory.



