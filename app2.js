// a simple example to understand super constructor
var util = require('util');

function Person(){
	this.firstname = 'John';
	this.lastname = 'Doe';
}

Person.prototype.greet = function(){
	console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(){
	// if we don't add this line, the compiled result
	// will be Hello undefined undefined
	// because the function Person(){} didn't run!
	Person.call(this);
	this.badgenumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();