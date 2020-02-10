/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./merge_2_sorted_fill.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
        .toStrictEqual([1, 2, 2, 3, 5, 6]);
  });
  it('works', () => {
    expect(solutionWrapper([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3))
        .toStrictEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });
});
