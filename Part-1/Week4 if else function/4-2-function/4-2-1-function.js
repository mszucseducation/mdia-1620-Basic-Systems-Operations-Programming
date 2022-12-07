// Functions

/** Example 1
 * 
 * Write the function to call this declared, initialised and assigned function. 
 * Multiply a times b in the function. 
 * Return the answer. 
 * Then console log the value below the function. 
 * Add the answer as a comment. 
 * Write a comment above the function to describe it.
 * 
 */

 var x = myFunction(3, 7);

 /**
 * @desc is multiplying the numbers
 */
 function myFunction(a, b) {
     return a * b;
 }
 
 console.log(x); // 21
 


/** Example 2
 * 
 * Write the function to call a declared, initialised and assigned function in one line. 
 * The function should be called toFahrenheit. 
 * Call the variable fahrenheit. 
 * Have the celsius be 20.
 * Add the equation in the function to convert celsius to fahrenheit. 
 * Return the answer. 
 * Then console log the value below the function. 
 * Add the answer as a comment. 
 * Write a comment above the function to describe it.
 * 
 */

 var celsiusTemperature = toFahrenheit(20);

 /**
 * @desc is converting celsius to fahrenheit
 */
 function toFahrenheit(celsius) {
     return (9/5) * celsius + 32;
 }
 
 console.log(celsiusTemperature);
 


/** Example 3
 * 
 * Write the function to declared, initialised and assigned function in one line using the variable x. 
 * The function should be called myFunction. 
 * Have the function take in the numbers 5 and 6. 
 * Return the answer a multiplied by b. 
 * Then console log the value below the function. 
 * Add the answer as a comment. 
 * Write a comment above the function to describe it.
 * 
 * Next, create a variable d and assign it the value of 5. 
 * Create another variable z and assign it to the function called addingFive. 
 * Make addingFive take in the variables x and d. 
 * Then inside the function add the variables g and h. 
 * After the function console log out the variable z. 
 * Write a comment above the function to describe it. 
 * Add a comment to give the answer.
 * 
 */

 var x = myFunction(5, 6);

 /**
 * @desc is multiplying two numbers together
 */
 function myFunction(a, b) {
     return a * b;
 }
 
 console.log(x); // 30
 
 var d = 5;
 
 var z = addingFive(x, d);
 
 /**
 * @desc is adding two numbers together
 */
 function addingFive(g, h) {
     return g + h;
 }
 
 console.log(z); // 35
 

/** Example 4
 * 
 * Write the first function to declared, initialised and assigned function in one line using the variable first name. 
 * This function should be called  name fix. 
 * This will take in the value george which is all lowercase. 
 * 
 * Write the second function to declared, initialised and assigned function in one line using the variable person one. 
 * This function should be called  sentence function.  
 * This will take in the value of the first name we just created and also the number 25. 
 * 
 * Below the variables just created write the function for sentence function which takes in the values first name and age. 
 * Then have it return the sentence saying: My name is _firstName_ and I am _age_ years old.
 * 
 * Write the second function and have it take in the first name. 
 * Then have it return the name formatted the proper way with the first letter being capitalised. 
 * 
 * Lastly, at the bottom console log out person one. 
 * 
 */

 var firstName = nameFix("george");
 var personOne = sentenceFunction(firstName, 25);
 
 function sentenceFunction(firstName, age) {
     return "My name is " + firstName + " and I am " + age + " years old.";
 }
 
 function nameFix(firstName) {
     return firstName[0].toUpperCase() + firstName.substring(1);
 }
 
 console.log(personOne);
 