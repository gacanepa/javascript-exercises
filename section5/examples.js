// NUMBER
console.log(Number.isNaN(3)); //false
console.log(Number.isNaN("hi there")); //false
console.log(Number.isNaN(Math.sqrt(-1))); //true
console.log(Number.isNaN(0/0)); //true
console.log(Number.isInteger(2)); //true
console.log(Number.isInteger(3.5)); //false
console.log(Number.isInteger("a")); //false
console.log(Number.isInteger(3500)); //true
var a = 2.6742252;
console.log(a.toFixed(1)); //"2.7"
console.log(a.toFixed(2)); //"2.67"
console.log(a.toFixed(3)); //"2.674"
console.log(a.toFixed(5)); //"2.67423"

// STRING
var sentence = "We all live in a yellow submarine";
console.log(sentence.length); //33
console.log(sentence.charAt(17)); //"y"
console.log(sentence.charCodeAt(17)); //121
console.log(sentence.includes("sub")); //true
console.log(sentence.includes("Beatles")); //false
console.log(sentence.indexOf("a")); //3
console.log(sentence.lastIndexOf("a")); //28
console.log(sentence.startsWith("We")); //true
console.log(sentence.startsWith("all live in")); //false
console.log(sentence.endsWith("marine")); //true
console.log(sentence.endsWith("submarine")); //true
console.log(sentence.endsWith("Great song!")); //false
console.log(sentence.substring(7, 23)); //"live in a yellow"
console.log(sentence.toLowerCase()); //"we all live in a yellow submarine"
console.log(sentence.toUpperCase()); //"WE ALL LIVE IN A YELLOW SUBMARINE"

// BOOLEAN
var x = true;
console.log(x); //true
console.log(x.toString()); //"true"
var y = x.valueOf();
console.log(y); //true

// FUNCTIONS
function isAdult(age) {
    if (Number.isInteger(age)) {
   	 if (age >= 18) {
   		 return "You are an adult";
   	 }
   	 else {
   		 return "You are a minor";
   	 }
    }
    else {
   	 return "You have entered an invalid age";    
    }
};
console.log(isAdult(15)); //"You are a minor"
console.log(isAdult(99)); //"You are an adult"
console.log(isAdult("AA")); //"You have entered an invalid age"

// ARROW FUNCTIONS
var result = (age) => {
    if (Number.isInteger(age)) {
   	 if (age >= 18) {
   		 return "You are an adult";
   	 }
   	 else {
   		 return "You are a minor";
   	 }
    }
    else {
   	 return "You have entered an invalid age";    
    }
};
console.log(result(18)); //"You are an adult"
console.log(result(16)); //"You are a minor"
console.log(result("CC")); //"You have entered an invalid age"

// ARRAYS
var fairyTales = [];
fairyTales.push("Cinderella");
fairyTales.unshift("Beauty and the Beast");
fairyTales.unshift("The little mermaid");
fairyTales; //Array [ "The little mermaid", "Beauty and the Beast", "Cinderella" ]
fairyTales[1]; //"Beauty and the Beast"
fairyTales.length; //3
fairyTales.forEach(function (item, index, array) {
  console.log(item, index);
});
//The little mermaid 0
//Beauty and the Beast 1
//Cinderella 2
var fairyTalesOrig = fairyTales.slice();
console.log(fairyTalesOrig); //Array [ "The little mermaid", "Beauty and the Beast", "Cinderella" ]
fairyTales.pop();
console.log(fairyTales);//Array [ "The little mermaid", "Beauty and the Beast" ]
fairyTales.shift(); //"The little mermaid"
console.log(fairyTales); //Array [ "Beauty and the Beast" ]

// DATES
var myBirthDate = new Date(Date.UTC(1983,0,15,13,09,05));
console.log(myBirthDate); //Date 1983-01-15T13:09:05.000Z
console.log(myBirthDate.getDate()); //15
console.log(myBirthDate.getDay()); //6
console.log(myBirthDate.getFullYear()); //1983
console.log(myBirthDate.getHours()); //10
console.log(myBirthDate.getMinutes()); //9
console.log(myBirthDate.getMonth()); //0
console.log(myBirthDate.getSeconds()); //5
console.log(myBirthDate.getTime()); //411484145000
console.log(myBirthDate.toString()); //"Sat Jan 15 1983 10:09:05 GMT-0300 (ART)"

// ASSIGNMENT OPERATORS
var x = 10;
console.log(x); //10
x += 2; //12
console.log(x);
x -= 7; //5
console.log(x);
x *= 9; //45
console.log(x);
x /= 9; //5
console.log(x);
x %= 3; //2
console.log(x);
x = x++;
console.log(x);
x = --x;
console.log(x);

// COMPARISON OPERATORS
var a = 15;
var b = 18;
console.log(a > b); //false
console.log(a !== b); //true
var x = 15;
var y = 15;
console.log(x == y); //true
console.log(x === y); //true
var z = "15";
console.log(x == z); //true
console.log(x === z); //false

// SWITCH-CASE
var currentTime = new Date();
currentTime.getHours();
var currentHour = currentTime.getHours();
switch (true)  {
    case (currentHour < 12):
   	 console.log("Good morning!");
   	 break;
    case (currentHour > 12 && currentHour < 17):
   	 console.log("Good afternoon!");
   	 break;
    default:
   	 console.log("Good evening!");
   	 break;
};
