var fs = require('fs');

/*
/synchronous
//readFileSync function
console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

//asynchronous
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, result) {
	console.log(result);
});
console.log('C');
