const { exportAllDeclaration } = require('@babel/types');
const cloneArray = require('../js/cloneArray')

test('Array has been cloned', () => {
    const array = [1,2,3]
    expect(cloneArray(array)).toEqual(array)
    expect(cloneArray(array)).not.toBe(array)
})