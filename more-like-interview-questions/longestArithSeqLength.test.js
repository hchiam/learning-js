/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./longestArithSeqLength.js');

describe('index', () => {
  it('works', () => {
    expect(solutionWrapper([3, 6, 9, 12])).toBe(4);
  });
  it('works', () => {
    expect(solutionWrapper([9, 4, 7, 2, 10])).toBe(3);
  });
  it('works', () => {
    expect(solutionWrapper([20, 1, 15, 3, 10, 5, 8])).toBe(4);
  });
  it('works', () => {
    expect(solutionWrapper([0, 10000, 0, 1])).toBe(2);
  });
  it('works', () => {
    expect(solutionWrapper([44, 46, 22, 68, 45, 66, 43, 9, 37,
      30, 50, 67, 32, 47, 44, 11, 15, 4, 11, 6, 20, 64, 54, 54,
      61, 63, 23, 43, 3, 12, 51, 61, 16, 57, 14, 12, 55, 17, 18,
      25, 19, 28, 45, 56, 29, 39, 52, 8, 1, 21, 17, 21, 23, 70,
      51, 61, 21, 52, 25, 28])).toBe(6);
  });
  it('works', () => {
    expect(solutionWrapper([83, 20, 17, 43, 52, 78, 68, 45])).toBe(2);
  });
});
