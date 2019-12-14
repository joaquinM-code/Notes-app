const chalk = require('chalk');
const yargs = require('yargs');
const note = require('./notes.js');


yargs.version('1.0.0')//Adds the version of YOUR program to the parameter --version

//Creating add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{//Adds parameters to my command
        title:{
            describe:'Note title',
            demandOption:true,//Mandatory to add the parameter
            type:'string'//Converst to string values pased

        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        note.addNote(argv.title,argv.body);
    }
})
//Creating remove command
yargs.command({
    command: 'remove',
    describe:'Removes a note',
    builder:{
        title:{
            describe:'Title of the note to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        note.removeNote(argv.title);
    }
})
//Creating list command
yargs.command({
    command:'list',
    describe:'Lists all your notes',
    handler: function(){
        console.log('Listing your notes')
    }
})
//Creating read commmand
yargs.command({
    command:'read',
    describe:'Read a note',
    handler: function(){
        console.log('Reading your note')
    }
})

yargs.parse(); //Basicaly goes trught the process code above and makes everything work 