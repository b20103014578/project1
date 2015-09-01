var fs = require('fs');
var officegen = require('officegen');

// create xlsx
var xlsx = officegen('xlsx');
xlsx.name = 'My excel';

//create new sheet
var sheet = xlsx.makeNewSheet();
sheet.data[10]=[];
sheet.data[10][2] = 'Hello';
sheet.setCell('G8','Node.js');

//save as a new file
var output = fs.createWriteStream('output.xlsx');
xlsx.generate(output);
