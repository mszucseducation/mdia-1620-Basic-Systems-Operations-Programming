// Logical Operators - NOT

/** Example 1
 * 
 * Declare, initialise and assign a variable x to the value 10. 
 * Declare, initialise and assign a variable y to the value 6. 
 * First console log out x greater than 5 or not y less than 11 .
 * 
 */

 var x = 10;
 var y = 6;
 console.log(x > 5 && !(y < 11)); // false
 

/** Example 2
 * 
 * Declare, initialise and assign a variable x to the value 10. 
 * Declare, initialise and assign a variable y to the value 6. 
 * First console log out not x greater than 11 or y less than 11 .
 * 
 */

 var x = 10;
 var y = 6;
 console.log(!(x > 11) && y < 11); // true
 