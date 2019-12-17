const fs = require('fs');
const chalk = require('chalk')

const loadNotes =()=>{
    try{
        return JSON.parse(fs.readFileSync('notes.json').toString());
    }catch(e){
        return [];
    };
}

const saveNotes = (notes)=>{
    fs.writeFileSync('notes.json', JSON.stringify(notes));
}



const addNote =(title,body)=>{
    const notes = loadNotes();
    const duplicateNote = notes.find((note)=>note.title === title);

    if(!duplicateNote){
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.green('Note added successfully!!'));
    }else{
        console.log(chalk.red.bold('Title already taken!'));
    }
    
}

const removeNote =(title)=>{

    const notes = loadNotes();
    const notesToKeep = notes.filter((note)=>note.title !== title);

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green('Note removed successfully!!'));    
    }else{
        console.log(chalk.red.bold('No match found for '+'"'+title+'"'));
    } 
    
}

const listNotes = ()=>{
    console.log(chalk.cyan('Your notes:'));
    const notes = loadNotes();
    notes.forEach((note)=>console.log(chalk.green('\t-- '+note.title)));

}

const readNote = (title) =>{
    
    const notes = loadNotes();
    const myNote = notes.find((note)=>note.title === title);
    if(myNote){
        console.log(chalk.green('--'+myNote.title+":\n")+"\t"+myNote.body);
    }else{
        console.log(chalk.red('No note found'));
    }
}

module.exports = {
    removeNote,
    addNote,
    listNotes,
    readNote
}