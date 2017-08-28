console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    if (fs.existsSync('notes-data.json')){
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }

    return [];
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);

        return note;
    }
}

var getAll = () => {
    return fetchNotes();
}

var getNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title);
    if (filteredNotes.length > 0){
        return filteredNotes[0];
    }
    else{
        return null;
    }
}

var removeNote = (title) => {
    var notes = fetchNotes();
    //Filter notes yang tidak sama dengan yang diminta
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('---');
    console.log('Title : ' + note.title);
    console.log('Body : ' + note.body);
}

// Fungsi yang telah dibuat harus di export
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}

//console.log(module);
/*
module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}

module.exports.cetakAngka = function(angka) {
    console.log('cetakAngka');
    return 'Cetak angka ' + angka;
}

module.exports.add = (a, b) => {
    return a + b;
}
*/