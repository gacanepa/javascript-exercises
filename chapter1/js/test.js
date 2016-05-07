/* Function declaration
   ====================
SayHi requires 3 parameters: your name, age, and profession (in that order).
In the function definition, these 3 parameters are named a, b, and c.
The function returns a greeting using those values.
*/
function SayHi(a,b,c){
	var person = {name: a, age: b, profession: c};
	return 'My name is ' + person.name + ' and am ' + person.age + ' years old. I am a ' + person.profession + '.';
}

/* Object definition
   =================
introducingMyself is an object variable that gets the first h3 element in the
document. This element has a property called textContent where we will show
the result of calling SayHi with the indicated parameters.
*/
var introducingMyself = document.querySelector('h3');
introducingMyself.textContent = SayHi('Gabriel', 33, 'programmer');
