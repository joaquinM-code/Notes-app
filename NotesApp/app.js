const validator = require('validator')

//Challenge : Esport a function from other file
const getNotes = require('./notes.js');
console.log(getNotes());

console.log(validator.isURL('google.com'));