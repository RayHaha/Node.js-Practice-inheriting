var EventEmitter = require('events');

// use class to build new object
// extends means that Greetr inherits from EventEmitter
class Greetr extends EventEmitter{
	constructor(){
		super();	// it did the same as EventEmitter.call(this);
		this.greeting = 'Hello World!';
	}

	greet(data){
		console.log(this.greeting + ': ' + data);
		this.emit('greet', data);
	}
}

/*
function Greetr(){
	// we use var greeter1 = new Greetr(); to create a new object
	// so the "this" here is an new object
	// we need to use .call to pass the new object that has already been created
	// inside the EventEmitter function constructor, it's passed by reference
	// it's also called super constructor
	EventEmitter.call(this);
	this.greeting = 'Hello World!';
}

// use util.inherits to let Greetr inherit the properties and method from EventEmitter
util.inherits(Greetr, EventEmitter);

// set the own function of Greetr
Greetr.prototype.greet = function(data){
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}
*/

// create new object
var greeter1 = new Greetr();

// greeter1 has accessed to the methods and properties of both Greetr and EventEmitter
greeter1.on('greet', function(data){
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');