// Curly Brace

/** Example 1
 * 
 * Declare and initialise a variable called x. 
 * Then assign it to 12. 
 * Create another variable called sentence and assign it to the sentence “There were __ candies in the jar”. 
 * The underscore is where you should add the variable in the curly brace. 
 * The console log out the sentence
 * 
 */

var x = 2;
sentence = `There were ${x} candies in the jar.`;

console.log(sentence);


/** Example 2
 * 
 * Declare and initialise a variable called first name. 
 * Then assign it to Mark. 
 * Declare and initialise a variable called last name. 
 * Assign it to Jameson. 
 * Declare and initialise a variable job. 
 * Then assign it to graphic designer. 
 * Create another variable called sentence and assign it to the sentence “__first__  __last__ was hired as a __job__”. 
 * The underscore is where you should add the variable in the curly brace. 
 * The console log out the sentence. 
 * 
 */

var firstName = "Mark";
var lastName = "Jameson"
var job = "graphic designer";

var sentence = `${firstName} ${lastName} was hired as a ${job}.`;

console.log(sentence);