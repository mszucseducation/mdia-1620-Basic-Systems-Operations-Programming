const { multiplicationFunction } = require('../code/multiplication.js');

describe('exercise 3', ()=>{
    test('What is the division?', () => {
        expect(multiplicationFunction(3,4)).toBe(12);
    });
})