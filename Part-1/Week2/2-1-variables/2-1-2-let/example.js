// Using let

let x = 20;

{
    // block scoped
    let x = 15;
    console.log("inside the number is: " + x);
}

console.log("outside the number is " + x)