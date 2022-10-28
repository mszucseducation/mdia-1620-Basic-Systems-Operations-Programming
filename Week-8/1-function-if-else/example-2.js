var num = 12;
var message = "";

if(num > 12) {
    message = "Your number is too high";
} else if(num == 12) {
    message = "You guessed correct!";
} else {
    message = "Your number is too low.";
}

console.log(message);
