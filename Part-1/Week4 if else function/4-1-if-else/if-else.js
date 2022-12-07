// If Else statements

/** Example 1
 * 
 * Create a variable called chosen value and use Math.random() to assign a random number below 3 and greater or equal to 0. 
 * Make sure to use Math.floor to round the random integer to the nearest whole number. 
 * 
 * Then check to see if the chosen value is 0 then console.log out the answer This is the zero value. 
 * Then check to see if the chosen value is 1 and console.log out the answer This is the one value. 
 * Then check to see if the chosen value is 2 and console.log out the answer This is the second value. 
 * Else make the sentence say This is not a number between 0 and 2 inclusive.
 * 
 */

// Random number between 0 and 2 inclusive
var chosenValue = Math.floor(Math.random() * 3);
var sentence = "";

if (chosenValue == 0) {
    sentence = "This is the zero value";
} else if (chosenValue == 1) {
    sentence = "This is the one value";
} else if (chosenValue == 2) {
    sentence = "This is the second value";
} else {
    sentence = "This is not a number between 0 and 2 inclusive";
}

console.log(sentence);

/** Example 2
 * 
 * Declare, initialise and assign a variable date to the value of Date. 
 * Then create another variable called hour and assign it to date.getHours(). 
 * Create another variable called sentence and make it an empty string. 
 * 
 * Use a if statement to check if  hours is less than 12. 
 * If it is then assign sentence to Good Morning. 
 * Use else if to check if hour is less than 18. 
 * If it is then assign sentence to Good Afternoon.
 * Use else if to check if hour is less than 24. 
 * If is it then assign sentence to Good Evening. 
 * Else just console log out Error in time. 
 * 
 * Console log out the sentence at the bottom to display the answer.
 * 
 */

console.log();

 var date = new Date;
 var hour = date.getHours();
 var sentence = "";
 
 if (hour < 12) {
     sentence = "Good Morning";
 } else if (hour < 18) {
     sentence = "Good Afternoon";
 } else if ( hour < 24) {
     sentence = "Good Evening";
 } else {
     sentence = "Error in time";
 }

 console.log(sentence);

 console.log();


 /** Example 3
  * 
  * Create one variable called guess one and assign it to 2. 
  * Then another variable called guess two and assign it to Math.random. 
  * Make sure to only allow numbers below 3. 
  * Also only accept whole numbers using Math.floor.
  * Create an other variable called sentence and assign it to an empty string.
  * 
  * Then use a if statement to see if guess one is equal to 2 and not guess two equal to 1. 
  * If it is true then assign sentence the message: Your first guess is _2_. 
  * Your second guess is _0 or 2_. You got it right.
  * 
  * Else assign sentence to the message: You guessed wrong.
  * 
  */

  var guessOne = 2;
  var guessTwo = Math.floor(Math.random() * 3);
  var sentence = "";
  
  if (guessOne == 2 && !(guessTwo == 1)) {
      sentence = "Your first guess is " + guessOne + ". Your second guess is " + guessTwo + ". You got it right.";
  } else {
      sentence = "You guessed wrong";
  }

  console.log(sentence);
  
