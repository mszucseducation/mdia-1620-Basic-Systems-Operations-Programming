// when running this make sure to download Live Server
// Use the command Windows: ctrl + shift + P to open it up
import { Name, Address, Age} from './script1.js';

var val = Name("John");
var age = Age(26);
var item = val + " and " + age;

console.log(item);

document.getElementById("new").innerHTML = item;