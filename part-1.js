var fs = require('fs');

var fileContents = fs.readFileSync('names.txt', 'utf-8');
var fileContentsLines = fileContents.split(/\r?\n/);
fileContentsLines.reverse();
var bunchOfNames = fileContentsLines.join(' ');
console.log(bunchOfNames);
fs.writeFileSync('names-reversed.txt', bunchOfNames, 'utf-8');
for (var name of fileContentsLines){
    console.log(name);
}

for (var name of fileContentsLines){
    var letters = name.split('');
    letters.reverse();
    name = letters.join('');
    fs.writeFileSync(name + '.txt', name, 'utf-8');
}

