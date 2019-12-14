//Challenge : Export a function from other file
const getNotes = require('../NotesApp/notes.js');
console.log(getNotes());

//Using validator module to check strings 
// const validator = require('validator'); MODULE IN ANOTHER FOLDER MOVE FILE TO NotesApp to test
// console.log(validator.isURL('google.com'));

// //Challenge import chalk module and print a message green inverted and bold 
// const chalk = require('chalk'); MODULE IN ANOTHER FOLDER MOVE FILE TO NotesApp to test
// console.log(chalk.red.inverse.bold('Error'));

// //Take and print arguments from terminal using yargs
console.log(process.argv[2]);