/* eslint-disable require-jsdoc */

const {maximumProduct} = require('./maximumProduct.js');

describe('index', () => {
  it('works', () => {
    expect(maximumProduct([1, 2, 3])).toBe(6);
    expect(maximumProduct([1, 2, 3, 4])).toBe(24);
    expect(maximumProduct([2, 4, 1, 3])).toBe(24);
    expect(maximumProduct([1, 1, 2, 4, 1, 1, 3, 0, -1])).toBe(24);
    expect(maximumProduct([-3, -10, -1, 0])).toBe(0);
    expect(maximumProduct([-3, -10, -1, -1])).toBe(-3);
    expect(maximumProduct([-1, 1, -1, -3])).toBe(3);
  });
});
