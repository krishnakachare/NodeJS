//External Node Modules: Third party modules. Eg; API, NPM, node_modules folder, etc.

//NPM : Node Package Manager
const superheroes = require('superheroes'); //When using external module, we don't need to give './'.
console.log(superheroes.random());

//const chalk = require('chalk'); //Facing some issue in requiring chalk.
//console.log(chalk.blue('Hey!'));

const validator = require('validator')
const res = validator.isEmail("abc@gmail.com");
console.log(res);





