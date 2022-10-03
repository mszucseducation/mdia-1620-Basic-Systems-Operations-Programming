var number = 0;
var firstName = "Bob";
var lastName = "Joe";
var sentence = "";
var proceed = false;

while(proceed) {

    if(number = 5){
        number += 3;
    }

    if(number = 10) {
        // keep the ${} inside the sentence
        sentence = 'My name is ${firstName} {$lastName}. I have reached the number {number}.';
        break;
    }
}

console.log(sentence);