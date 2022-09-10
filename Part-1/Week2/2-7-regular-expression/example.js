// Regular Expression

/** Example 1
 * 
 * Search for the word teacher
 * 
 */
var textOne = "The teacher is studying at BCIT.";
var n = textOne.search(/teacher/i);

console.log(n);

/** Example 2
 * 
 * Search for the word studying
 * 
 */
var textTwo = "The teacher is studying at BCIT.";
var m = textTwo.search(/studying/i);

console.log(m);

console.log();

// replace a word

/** Example 1
 * 
 * Replace the word teacher with student
 * 
 */
 var textThree = "The teacher is studying at BCIT.";
 var p = textThree.replace("teacher", "student");
 
 console.log(p);
 
 /** Example 2
  * 
  * repalce the word studying to working
  * 
  */
 var textFour = "The teacher is studying at BCIT.";
 var p = textFour.replace("studying", "working");
 
 console.log(p);