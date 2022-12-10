var human = function() {
    return `I am ${this.age} years old`;
}

var personOne = {
    eyes: "blue",
    age: 30,
    human: human
}

console.log(personOne.eyes);
console.log(personOne.human);
console.log(personOne.human());


