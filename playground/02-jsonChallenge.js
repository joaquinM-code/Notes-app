//Challenge : Work with JSON and fs module
//1.Load and parse the JSON data
//2.Change name and age property
//3.Stringify the changed object and overwrite the original
const fs = require('fs');

myData = JSON.parse(fs.readFileSync('storedJSON.json').toString());
myData.title='The hitchhiker\'s guide of the galaxy';
myData.author='Douglas Adams';
fs.writeFileSync('storedJSON.json', JSON.stringify(myData));