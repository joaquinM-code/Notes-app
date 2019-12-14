const fs = require('fs');
const chalk = require('chalk')
const loadNotes = function(){
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }catch(e){
        return [];
    };
}

const saveNotes=function(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}



const addNote = function(title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    })

    if(duplicateNotes.length == 0){
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.green('Note added successfully!!'))
    }else{
        console.log(chalk.red.bold('Title already taken!'))
    }
    
}

const removeNote = function(title){

    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note){
        return note.title !== title;
    })

    if(notes.length>notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed successfully!!'));    
    }else{
        console.log(chalk.red.bold('No match found for '+'"'+title+'"'));
    } 
    
}


module.exports = {
    removeNote,
    addNote
}