/* Function declarations
   =====================
sayHi requires 3 parameters: your name, age, and profession (in that order).
In the function definition, these 3 parameters are named a, b, and c.
The function returns a greeting using those values.

getDayOfWeek returns the current day of the week (Sunday = 0 through Saturday = 6)

*/
function sayHi(a, b, c){
	var person = {name: a, age: b, profession: c};
	return 'My name is ' + person.name + ' and am ' + person.age + ' years old. I am a ' + person.profession + '.';
}

function getDayOfWeek() {
    var d = new Date();
    var weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return "Happy " + weekDay[d.getDay()];
}

/* Object definition
   =================
introducingMyself is an object variable that gets the first h3 element in the
document. This element has a property called textContent where we will show
the result of calling sayHi with the indicated parameters.

It is important to note that textContent sets or returns the text content of the specified node 
and all its descendants, whereas innerHTML property sets or returns the HTML content of an element.

mainHeader stores the element with the ID of "header". We will use its innerHTML
property to display the output of getDayOfWeek.
*/
var introducingMyself = document.querySelector('p'); // Document.querySelector(): https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
introducingMyself.textContent = sayHi('Gabriel', 37, 'programmer');

var mainHeader = document.getElementById("header"); // Document.getElementById(): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
mainHeader.innerHTML = getDayOfWeek();