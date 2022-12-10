// json object
var jsonData = '{ "firstName": "Sam", "age": 30, "hobbies": ["hiking", "biking"]}';

// converting to JavaScript Object
var objStuff = JSON.parse(jsonData);

console.log(objStuff.age);
console.log(objStuff.hobbies[1])