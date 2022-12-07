var car = 0;
var text = "";

switch (car) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

console.log("The car is " + text);
