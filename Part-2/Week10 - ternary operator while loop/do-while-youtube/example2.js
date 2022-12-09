var proceed = true;
var j = 0;

do {
    j++;
    if(j == 3) {
        proceed = false;
    }
    console.log(j);
} while (proceed)

console.log("done");