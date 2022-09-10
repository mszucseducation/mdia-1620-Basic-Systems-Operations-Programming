class Person{
    firstName;

    constructor(firstName) {
        this.firstName = firstName;
    }

    set setName(firstName){
        this.firstName = firstName;
    }

    get sentence() {
        return "Hi my name is " + this.firstName[0].toUpperCase() + this.firstName.slice(1);
    }

}

var personOne = new Person("fred");

console.log(personOne.sentence);