/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./lengthOfLongestIncreasingSubsequence.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('works', () => expect(solutionWrapper([])).toBe(0));
  it('works', () => expect(solutionWrapper([1])).toBe(1));
  it('works', () => expect(solutionWrapper([2])).toBe(1));
  it('works', () => expect(solutionWrapper([1, 2])).toBe(2));
  it('works', () => expect(solutionWrapper([2, 1])).toBe(1));
  it('works', () => expect(solutionWrapper([1, 3, 2])).toBe(2));
  it('works', () => expect(solutionWrapper([1, 2, 3])).toBe(3));
  it('works', () => expect(solutionWrapper([3, 1, 2])).toBe(2));
  it('works', () => expect(solutionWrapper([3, 2, 1])).toBe(1));
  it('works', () => expect(solutionWrapper([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4));
});
