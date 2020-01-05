/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./combinationSum.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([2, 3, 6, 7], 7))
        .toStrictEqual([
          [2, 2, 3],
          [7],
        ]);
  });
  it('works', () => {
    expect(solutionWrapper([2, 3, 5], 8))
        .toStrictEqual([
          [2, 2, 2, 2],
          [2, 3, 3],
          [3, 5],
        ]);
  });
});
