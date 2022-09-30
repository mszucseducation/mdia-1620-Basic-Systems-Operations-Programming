import { Name, StudentNumber, Program } from "./script1.js";

var firstName = Name("Monika");
var studentNumber = StudentNumber("A12345");
var program = Program("Digital Design and Development Diploma");

var sentence = firstName + " " + studentNumber + " " + program;

console.log(sentence);
document.getElementById("person").innerHTML = sentence;
