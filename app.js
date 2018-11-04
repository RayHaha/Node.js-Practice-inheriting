var EventEmitter = require('events');
var util = require('util');

function Greetr(){
	this.greeting = 'Hello World!';
}

// use util.inherits to let Greetr inherit the properties and method from EventEmitter
util.inherits(Greetr, EventEmitter);

// set the own function of Greetr
Greetr.prototype.greet = function(data){
	console.log(this.greeting + ': ' + data);
	this.emit('greet', data);
}

// create new object
var greeter1 = new Greetr();

// greeter1 has accessed to the methods and properties of both Greetr and EventEmitter
greeter1.on('greet', function(data){
	console.log('Someone greeted!: ' + data);
});

greeter1.greet('Tony');