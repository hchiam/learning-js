/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./minCostClimbingStairs.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('works', () => expect(solutionWrapper([10, 15, 20])).toBe(15));
  it('works', () => expect(solutionWrapper(
      [1, 100, 1, 1, 1, 100, 1, 1, 100, 1])).toBe(6));
  it('works', () => expect(solutionWrapper([0, 0, 0])).toBe(0));
  it('works', () => expect(solutionWrapper([0, 0])).toBe(0));
});
