const sum = require('../js/sum');

// first we will add a description of what we want to test then we make a function () =>
test("Testing the sum of two numbers", () => {
    // we use functions built in with jest they are called "expect"
    expect(
        sum(1,2)
    ).toBe(3);
})