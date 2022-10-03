const {additionFunction} = require('../code/addition.js');

describe('exercise 1', ()=>{
    test('What is additional of the three numbers', () => {
        expect(additionFunction(10, 20, 30)).toBe(60);
    });
})