/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./subsets.js');

describe('the solution handles silly input', () => {
  it('works', () => expect(solutionWrapper()).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper('')).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([])).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([1])).toStrictEqual([[], [1]]));
});

describe('the solution', () => {
  it('works with 2', () => expect(new Set(solutionWrapper([1, 2]).sort()))
      .toStrictEqual(new Set([[], [1], [2], [1, 2]].sort())));
  it('works with 3', () => expect(new Set(solutionWrapper([1, 2, 3]).sort()))
      .toStrictEqual(new Set([[], [1], [2], [3],
        [1, 2], [1, 3], [2, 3],
        [1, 2, 3]].sort())));
  it('works with 4', () => expect(new Set(solutionWrapper([1, 2, 3, 4]).sort()))
      .toStrictEqual(new Set([[], [1], [2], [3], [4],
        [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4],
        [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4],
        [1, 2, 3, 4]].sort())));
});
