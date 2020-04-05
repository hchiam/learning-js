/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./hammingWeight.js');

describe('hamming weight', () => {
  it('works', () => {
    expect(solutionWrapper(0b1)).toBe(1);
    expect(solutionWrapper(0b0)).toBe(0);
    expect(solutionWrapper(0b10)).toBe(1);
    expect(solutionWrapper(0b11)).toBe(2);
    expect(solutionWrapper(0b100)).toBe(1);
    expect(solutionWrapper(0b101)).toBe(2);
    expect(solutionWrapper(0b001)).toBe(1);
    expect(solutionWrapper(0b00000000000000000000000000001011)).toBe(3);
    expect(solutionWrapper(0b00000000000000000000000010000000)).toBe(1);
    expect(solutionWrapper(0b11111111111111111111111111111101)).toBe(31);
    expect(solutionWrapper(0b11101)).toBe(4);
  });
});
