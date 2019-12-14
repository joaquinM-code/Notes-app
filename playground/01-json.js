
const fs = require('fs');

//Creating an object
const book={
    title:'Lord of the rings',
    author:'JRR Tolkien',
    liked:'yes'
};

//Converting the object to JSON and printing 
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//Converting back into a object and printing one index
const parsedBook = JSON.parse(bookJSON);
console.log(book.title);

//Writing data into a .json file
fs.writeFileSync('storedJSON.json', bookJSON);
const dataBuffer = fs.readFileSync('storedJSON.json')//Returns a buffer with the file bytes
console.log(dataBuffer)
 
//Converting the buffer onto string
realData = dataBuffer.toString()
console.log(realData)

//Parsing JSON and printing index
realObject = JSON.parse(realData)
console.log(realObject.title)



