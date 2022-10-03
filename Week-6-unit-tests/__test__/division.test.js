const { divisionFunction } = require('../code/division.js');

describe('exercise 2', ()=>{
    test('What is the division?', () => {
        expect(divisionFunction(40,10)).toBe(4);
    });
})