//array, object

//variable f
var f = function() {
	console.log(1+1);
	console.log(1+2);
}

//console.log(f);
//f();

//if-statement is not a value.
//var i = if (true) {console.log(1)};

var a = [f];
a[0]();

var o = {
	func: f
}

o.func();