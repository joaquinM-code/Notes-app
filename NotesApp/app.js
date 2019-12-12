

//Challenge : Export a function from other file
const getNotes = require('./notes.js');
console.log(getNotes());

//Using validator module to check strings 
const validator = require('validator');
console.log(validator.isURL('google.com'));

//Challenge import chalk module and print a message green inverted and bold
const chalk = require('chalk');
console.log(chalk.green.inverse.bold('Success!!'))