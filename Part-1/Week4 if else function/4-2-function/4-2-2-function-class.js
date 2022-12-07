/** Example 5 - Bonus with Class and Function
 * 
 * Create a Class and have it be called Person. 
 * Add a constructor with the name. Have a setter called name collected. 
 * Have a getter called name collected. 
 * Have another getter called formatted name. 
 * In this formatted name method, have the first letter of the name be uppercase.
 * Declare, initialise and assign person one to a new Person class that takes in the name george in all lowercase letters.
 * 
 */

 class Person {
    name;

    constructor(name) {
        this.name = name;
    }

    set nameCollected(firstName) {
        this.name = firstName;
    }

    get nameCollected() {
        return this.name;
    }

    formattedName() {
        return this.name[0].toUpperCase() + this.name.slice(1);
    }
}

var personOne = new Person("george");

console.log(personOne.nameCollected);
console.log(personOne.formattedName());



