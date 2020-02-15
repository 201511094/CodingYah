/*
function a() {
	console.log('A');
}
*/
//same code with function a
var a = function() {
	console.log('A');
}

//function that take long time
function slowfunc(callback) {
	console.log('callback');
	callback();
}

slowfunc(a);