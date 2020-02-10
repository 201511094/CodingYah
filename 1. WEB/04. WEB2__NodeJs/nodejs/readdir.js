var testFolder = './data';
var fs = require('fs');

//error, filelist -> two variables
fs.readdir(testFolder, function(error, filelist) {
	console.log(filelist);
})