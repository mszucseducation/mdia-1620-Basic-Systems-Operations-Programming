// Arrays

/** Example 1 - Displaying items in array
 * 
 * Create an array with the different pet types: bird, cat, dog. 
 * Declare and assign it to the variable pets. 
 * Console log out pets.
 * 
 */

var pets = ["bird", "cat", "dog"];

console.log(pets);


/** Example 2
 * 
 * 
 * 
 */

var supplies = [];

supplies[0] = "erasers";
supplies[2] = "pens";
supplies[5] = "paper";
 
console.log(supplies);
 

/** Example 3 - Pop
 * 
 * 
 * 
 */

var pets = ["bird", "cat", "dog"];
pets.pop();
 
console.log(pets);
 


/** Example 4 - Push
 * 
 * 
 * 
 */

var schoolPrograms = ["computer science", "business", "arts"];

schoolPrograms.push("medicine");
 
console.log(schoolPrograms);
 

 /** Example 5 - Replace
  * 
  * 
  * 
  */

var schoolPrograms = ["computer science", "business", "arts"];

schoolPrograms[1] = "medicine";
  
console.log(schoolPrograms);
  

/** Example 6 - Creating a new Array
 * 
 * 
 * 
 */

const cars = new Array("Toyota", "Ford", "BMW", "Nissan");

console.log(cars);
   

/** Example 7 - Multi Dimensional Array
 * 
 * 
 * 
 */

var schoolPrograms = [];

schoolPrograms[0] = ["Computer Systems (Database)", "Computer Systems (Human Computer Interface)", "Computer Systems (Network Security Administration"];
schoolPrograms[1] = "business";
schoolPrograms[2] = "arts";

console.log(schoolPrograms);
console.log();
console.log(schoolPrograms[0][1]);


/** Example 8 - Concatenation
 * 
 * 
 * 
 */

var schoolPrograms = ["computer science", "business", "arts"];
var schoolProgramsTwo = ["medicine", "construction"]
     
console.log(schoolPrograms.concat(schoolProgramsTwo));
     

    