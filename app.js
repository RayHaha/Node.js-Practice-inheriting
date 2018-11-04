var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	this.greeting = 'Hello World!';
}

// use util.inherits to let Greetr inherit the properties and method from EventEmitter
util.inherits(Greetr, EventEmitter);

// set the own function of Greetr
Greetr.prototype.greet = function(){
	console.log(this.greeting);
	this.emit('greet');
}

// create new object
var greeter1 = new Greetr();

// greeter1 has accessed to the methods and properties of both Greetr and EventEmitter
greeter1.on('greet', function(){
	console.log('Someone greeted!');
});

greeter1.greet();