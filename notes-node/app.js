console.log('Starting app.js');

//require digunakan untuk me-load library, dalam hal ini library fs, file system
const fs = require('fs');
const _ = require('lodash')
const yargs = require('yargs');

//const os = require('os');

const notes = require('./notes');

// Ambil array index 3, yang berisi request
const argv = yargs.argv;
var command = argv._[0];
console.log('Command : ', command);

// Tampilkan process argument
console.log("Process : ", process.argv);
console.log("Yargs : ", argv);

if (command === 'add'){
    notes.addNote(argv.title, argv.body);
}
else if (command === 'list'){
    notes.getAll();
}
else if (command === 'read'){
    notes.getNote(argv.title);
}
else if (command === 'remove'){
    notes.removeNote(argv.title);
}
else{
    console.log("command not recognized");
}


//var user = os.userInfo()
//console.log(user);

//console.log(_.isString(true));
//console.log(_.isString('Andrew'));

//var filteredArray = _.uniq(['Mike']);
//console.log(filteredArray);

/*
var result = notes.addNote();
console.log(result);

var result = notes.add(8, 5);
console.log('Result : ' + result);

fs.appendFile('greeting.txt', 'hello world ' + user.username + '!' + ' You are ' + notes.age, function(err){
    if (err){
        console.log("Unabel to write to file");
    }
});
*/
