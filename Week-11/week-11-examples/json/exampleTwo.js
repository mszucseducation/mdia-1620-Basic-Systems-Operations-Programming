var jsonContainer = '{"firstName": "John", "age": 25, "country": "Canada"}';
    
// Converting JSON-encoded string to JS object
var objectValues = JSON.parse(jsonContainer);

console.log(objectValues.firstName);
