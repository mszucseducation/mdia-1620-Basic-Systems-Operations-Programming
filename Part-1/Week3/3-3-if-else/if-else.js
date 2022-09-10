// IF ELSE Statements

/** Example 1
 * 
 * Declare, initialise and assign a variable x to the value 3. 
 * Use a if statement to check if x is equal to 3. 
 * Console log the message to say 'It is a match' if it is true.
 * 
 */

 var x = 3;

 if (x === 3) {
     console.log("It is a match");
 }
 

/** Example 2
 * 
 * Declare, initialise and assign a variable y to the value 7. 
 * Use a if statement to check if y is greater than 5. 
 * This time make sure to eliminate the magic number 5 by making its own variable called VALIDATION. 
 * Console log the message to say The value is larger than _5_ if it is true.
 * 
 */

 var y = 7;

 var VALIDATION = 5;
 
 if (y > VALIDATION) {
     console.log("The value is larger than " + VALIDATION + ".");
 }
 

 /** Example 3
  * 
  * Declare, initialise and assign a variable guess to the value 3. 
  * Use a if statement to check if x is equal to 3. 
  * If it is equal to 2 then have the message console log out You guessed 2 and you are right. 
  * Else have the console log say You guessed wrong.
  * 
  */

 var guess = 3;
 
 if (x == 3) {
    console.log("You guessed " + guess + " and you are right."); 
 } else {
    console.log("You guessed wrong");
 }

