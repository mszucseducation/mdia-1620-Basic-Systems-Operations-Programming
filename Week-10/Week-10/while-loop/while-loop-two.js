var proceed = true;
var i = 0;

while(proceed) {
    i += 2;
    // what happens if we do i == 9
    if(i > 9) {
        break;
    }
}

console.log(i);