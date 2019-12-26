// NEW (ES2016) FEATURES
// 1) Template literals, 2) Tagged templates, 3) Arrow functions, 4) Classes, 5) The let keyword

// 1) TEMPLATE LITERALS were called "template strings" in previous editions of the ES2015 specification
// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

// Template literals allow multi-line strings:
var greeting = `Hi! This
is a wonderful day, isn't it?`;
console.log(greeting);

// Also, template literals allow embedded expressions:
var person = {
			  name: "Gabriel", 
			  age: "37", 
			  profession: "developer", 
			  saySomething: function msg(d){
				return "I love " + d}
};
var mainHeader = document.getElementById("header"); // Document.getElementById(): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
mainHeader.innerHTML = `My name is ${person.name} and I'm a ${person.profession}. ${person.saySomething("coding.")}`;

// END TEMPLATE LITERALS ------------------------------------------------------------


// 2) TAGGED TEMPLATES

function namesToUpperTaggedTemplate(strings, ...values) {
	let str = "";
	// strings.length = values.length + 1 if the template string that is passed to the function ends with an expression.
	// This can be avoided by appending a dot at the end of the sentence.
	// console.log("STRINGS: " + strings.length); // Stores strings
	// console.log("VALUES: " + values.length); // Stores variables
	strings.forEach(function capitalize(string, i) {
		console.log("STRING " + string);
		if (values[i] != undefined) {
			str += `${string} <strong>${values[i]}</strong>`;
		}
		else {
			str += `${string}`;
		}
	});
	return str;
}
var firstName = "Gabriel";
var middleName = "Alejandro";
var lastName = "Cánepa";

var firstParagraph = document.querySelector("p");
firstParagraph.innerHTML = namesToUpperTaggedTemplate `First Name: ${firstName}, Middle Name: ${middleName}, Last Name: ${lastName}`;

// END TAGGED TEMPLATES ------------------------------------------------------------


// 3) ARROW FUNCTIONS

var currentDate = new Date();
var printCurrentDate = () => `Current date and time: ${currentDate}`;
document.querySelector("h4").innerHTML = printCurrentDate();

var hobbiesLi = "";
var hobbies = ["Sports", "Music", "Literature"];
var printHobby = (item) => {
	hobbiesLi += `<li>${item}</li>`;
}

hobbies.forEach(printHobby);
document.getElementById("hobbies").innerHTML += hobbiesLi;


// END ARROW FUNCTIONS ------------------------------------------------------------


// 4) CLASSES

class Counter {
	constructor() {
		this.value = 0;
		console.log(this);
		let timer = setInterval(() => {
			this.value++;
			console.log(this.value);
			if (this.value >= 5) {
				clearInterval(timer);
			}
		}, 1000);
	}
}
var counter = new Counter();

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
var me = new Person("Gabriel", "Cánepa", "developer", "37", 2500);
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
var me = new Person2("Gabriel", "Cánepa", "developer", "37", "2016-03-22", 1575);
console.log(me.saySomething());
console.log(me.getMonthlySalary());

// END CLASSES ------------------------------------------------------------


// 5) The let keyword

guessName();
function guessName() {
    var sayName = "John Doe";
    if (sayName === "John Doe") {
   	 let msg = `the name is ${sayName}`
   	 console.log(`Inside the block ${msg}.`)    
    }
    console.log(`Outside the block ${msg}.`)
}
