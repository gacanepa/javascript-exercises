// Template strings

var greeting = `Hi! This
is a wonderful day, isn't it?`;
console.log(greeting);

var person = {name: "Gabriel", age: "33", profession: "developer", saySomething: function msg(d){return "This is my message: " + d}};
console.log(`My name is ${person.name} and I'm a ${person.profession}. ${person.saySomething("Happy Tuesday!")}`);

// Tagged templates

function namesToUpper(strings, ...values) {
  return strings.reduce(function test(a, b, c) {
	return `${a}${values[c - 1].toUpperCase()}${b}`;
  })
}
var fName = "Gabriel";
var mName = "Alejandro";
var lName = "Cánepa";
console.log(namesToUpper `First Name: ${fName}, Middle Name: ${mName}, Last Name: ${lName}`);

// Arrow functions

function namesToUpper(strings, ...values) {
  return strings.reduce((a, b, c) => {
   return `${a}${values[c - 1].toUpperCase()}${b}`;
  })
}
var fName = "Gabriel";
var mName = "Alejandro";
var lName = "Cánepa";
console.log(namesToUpper `First Name: ${fName}, Middle Name: ${mName}, Last Name: ${lName}`);

function Counter(){
  this.value = 0;    
  var timer = setInterval(() => {
	this.value++;
    console.log(this.value);
	if (this.value >= 5) {
   	clearInterval(timer);
	}
  }, 1000);
}
var p = new Counter();

// Classes

class Person {
  constructor(fName, lName, profession, age) {
	// Properties
	this.fName = fName;
	this.lName = lName;
	this.profession = profession;
	this.age = age;
  }
	// Methods
	saySomething() {
  	return `What's up? I am a ${this.age}-yr. old ${this.profession}`;
	}
}
var me = new Person("Gabriel", "Cánepa", "developer", "33", 2500);
console.log(me.saySomething());

// Classes (Inheritance)

class Employee {
	constructor(hireDate, monthlySalary) {
    	this.hireDate = hireDate;
    	this.monthlySalary = monthlySalary;
	}
  getMonthlySalary() {
	return `I make ${this.monthlySalary} each month.`
  }
}
// We use a different class name to distinguish it from the Person class we created earlier
class Person2 extends Employee {
  constructor(fName, lName, profession, age, hireDate, monthlySalary) {
	// Properties
	super(hireDate, monthlySalary);
	this.fName = fName;
	this.lName = lName;
	this.profession = profession;
	this.age = age;
  }
	// Methods
	saySomething() {
  	return `What's up? I am a ${this.age}-yr. old ${this.profession} and was hired on ${this.hireDate}.`;
	}
}
var me = new Person2("Gabriel", "Cánepa", "developer", "33", "2016-03-22", 1575);
console.log(me.saySomething());
console.log(me.getMonthlySalary());

// The let keyword

guessName();
function guessName() {
    var sayName = "John Doe";
    if (sayName === "John Doe") {
   	 let msg = `the name is ${sayName}`
   	 console.log(`Inside the block ${msg}.`)    
    }
    console.log(`Outside the block ${msg}.`)
}
