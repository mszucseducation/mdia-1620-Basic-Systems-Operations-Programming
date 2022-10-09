const { subtractionFunction } = require('../code/subtraction.js');

describe('exercise 4', ()=>{
    test('What is the subraction?', () => {
        expect(subtractionFunction(10,3)).toBe(7);
    });
})