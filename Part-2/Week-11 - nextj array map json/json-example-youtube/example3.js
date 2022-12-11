//JSON object
var data = {
    "name": "Ben",
    "age": 30,
    "hobby": {
        "studying": true,
        "gaming": false,
        "sport": "soccer"
    },
    "programmingLanguage": ["HTML", "CSS", "JavaScript", "Java"]
}

// access JSON object
console.log(data.name);
console.log(data.hobby);
console.log(data.hobby.sport);
console.log(data.programmingLanguage[2])