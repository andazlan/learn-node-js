console.log('Starting notes.js');

var addNote = (title, body) => {
    console.log("adding note", title, body);
}

var getAll = () => {
    console.log("Getting all notes");
}

var getNote = (title) => {
    console.log("Reading note ", title);
}

var removeNote = (title) => {
    console.log("Removing note ", title);
}

// Fungsi yang telah dibuat harus di export
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
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