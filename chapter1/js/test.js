/* Function declarations
   =====================
sayHi requires 3 parameters: your name, age, and profession (a default value for the latter is provided)
The function returns a greeting using those values.
getDayOfWeek returns the current day of the week (Sunday = 0 through Saturday = 6)

*/
const sayHi = props => {
  const { name, age, profession } = props;
  return `My name is ${name} and I am a ${age}-year-old ${profession}.`;
}

function getDayOfWeek() {
  const today = new Date();
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return `Happy ${weekDays[today.getDay()]}`;
}

/* Object definition
   =================
introducingMyself is an object variable that gets the first p element in the
document. This element has a property called textContent where we will show
the result of calling sayHi with the indicated parameters.

It is important to note that textContent sets or returns the text content of the specified node 
and all its descendants, whereas innerHTML property sets or returns the HTML content of an element. Thus,
textContent has better performance because its value is not parsed as HTML.

mainHeader stores the element with the ID of "header"
*/
const introducingMyself = document.querySelector('p'); // Document.querySelector(): https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
introducingMyself.textContent = sayHi({ 
   name: 'Gabriel',
   age: 39,
   profession: 'software developer'
});

const mainHeader = document.getElementById('header'); // Document.getElementById(): https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
mainHeader.textContent = getDayOfWeek();