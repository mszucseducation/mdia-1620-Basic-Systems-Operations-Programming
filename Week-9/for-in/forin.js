var person = {fname:"Greg", lname:"Tom", age:40}; 
var sentence = "";

for (var x in person) {
    sentence += person[x] + " ";
}

console.log(sentence)
