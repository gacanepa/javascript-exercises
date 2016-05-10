// Demonstration of Array.includes
// Given the follow array
var famousWriters = [];
// Let's add a few items
famousWriters.push("C. S. Lewis");
famousWriters.push("J. K. Rowling");
famousWriters.push("J. R. R. Tolkien");
famousWriters.push("Richard Bach");
/* Then let's check whether the indicated items are included in the array or not. 
   The syntax allows to specify not only the item to search for but also the index 
   where the search should be started */
famousWriters.includes("C. S. Lewis"); //true
famousWriters.includes("Richard Bach"); //true
famousWriters.includes("C. S. Lewis", 1); //false
famousWriters.includes("John Doe"); //false

// Demonstration of Object.values/Object.entries
// Given the following object
var person = { name: "Gabriel", age: 33, profession: "developer" };
/* Let's return the values in each key/value pair. In this context,
   a key/value pair is also known as an entry. */
console.log(Object.values(person)); //['Gabriel', 33, 'developer']
// Let's return the each key/value pair, or entry.
console.log(Object.entries(person)); //[ ['name', 'Gabriel'], ['age', 33], ['profession', 'developer'] ]

// Demonstration of String padding
console.log(1.padStart(10)); //"         1"
console.log('1'.padStart(10, "0")); //"0000000001"
/* When the specified padding is less than or equal to the length 
   of the original string, no padding characters are added. */
console.log('1'.padEnd(10)); //"1         "
console.log('1'.padEnd(10, "0")); //"1000000000"
console.log('2016'.padStart(4, "0")); //"2016"
console.log('2016'.padEnd(3, "0")); //"2016"

