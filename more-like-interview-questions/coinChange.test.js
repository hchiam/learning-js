/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./coinChange.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('works', () => expect(solutionWrapper([], 3)).toBe(-1));
  it('works', () => expect(solutionWrapper([], 0)).toBe(0));
  it('works', () => expect(solutionWrapper([1], 0)).toBe(0));
  it('works', () => expect(solutionWrapper([1], -1)).toBe(-1));
  it('works', () => expect(solutionWrapper([1, 2, 5], 11)).toBe(3));
  it('works', () => expect(solutionWrapper([2], 3)).toBe(-1));
  it('works', () => expect(solutionWrapper([2, 3, 11], 8)).toBe(3));
  it('works', () => expect(solutionWrapper([1, 5, 8], 11)).toBe(3));
  it('works', () => expect(solutionWrapper([1], 2)).toBe(2));
  // tougher, less trivial test cases:
  it('works', () => expect(solutionWrapper([186, 419, 83, 408], 6249)).toBe(20));
  it('works', () => expect(solutionWrapper([1, 3], 11)).toBe(5));
});
