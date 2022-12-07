const subtract = require('../js/subtract');

// first we will add a description of what we want to test then we make a function () =>
test("Testing the subtraction of two numbers", () => {
    // we use functions built in with jest they are called "expect"
    expect(
        subtract(1,2)
    ).toBe(-1);
})