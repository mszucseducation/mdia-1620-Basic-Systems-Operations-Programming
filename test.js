const person = {fname:"Jenn", pet:"dog"}; 
let text = "";

for (let x in person) {
  if(x == "fname") {
    text += person[x] + " has a pet ";
  }
  
  if(x == "pet") {
    text += person[x] + ".";
  }
}

console.log(text)