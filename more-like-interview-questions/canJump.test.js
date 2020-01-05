/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./index.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([2, 3, 1, 1, 4]))
        .toStrictEqual(true);
  });
  it('works', () => {
    expect(solutionWrapper([3, 2, 1, 0, 4]))
        .toStrictEqual(false);
  });
  it('works', () => {
    expect(solutionWrapper([4, 2, 1, 0, 4]))
        .toStrictEqual(true);
  });
  it('works', () => expect(solutionWrapper([0])).toBe(true));
  it('works', () => expect(solutionWrapper([1])).toBe(true));
  it('works', () => expect(solutionWrapper([1, 0])).toBe(true));
  it('works', () => expect(solutionWrapper([0, 1])).toBe(false));
  it('works', () => expect(solutionWrapper([0, 0])).toBe(false));
  it('works', () => expect(solutionWrapper([1, 0, 4])).toBe(false));
  it('works', () => expect(solutionWrapper([2, 0, 4])).toBe(true));
  it('works', () => expect(solutionWrapper([1, 2, 3, 4])).toBe(true));
  it('works', () => expect(solutionWrapper([4, 3, 2, 1])).toBe(true));
  it('works', () => expect(solutionWrapper([1, 1, 1, 1, 2, 0, 3])).toBe(true));
  it('works', () => expect(solutionWrapper([3, 1, 1, 2, 0, 5])).toBe(true));
  it('works', () => expect(solutionWrapper([3, 1, 1, 1, 0, 5])).toBe(false));
  it('works', () => expect(solutionWrapper([2, 0, 1, 0, 4])).toBe(false));
  it('works', () => expect(solutionWrapper([1, 0, 2, 0, 4])).toBe(false));
  it('works', () => expect(solutionWrapper([2, 0, 2, 0, 4])).toBe(true));
  it('works', () => expect(solutionWrapper([5, 4, 3, 2, 1, 0, 4])).toBe(false));
  it('works', () => expect(solutionWrapper([5, 4, 3, 2, 2, 0, 4])).toBe(true));
  it('works', () => expect(solutionWrapper([5, 4, 3, 2, 0, 4])).toBe(true));
  it('works', () => expect(solutionWrapper(
      [5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0])).toBe(true));
  it('works', () => expect(solutionWrapper([3, 0, 0, 0])).toBe(true));
  it('works', () => expect(solutionWrapper(
      [2, 0, 0, 0, 2, 0, 0, 0])).toBe(false));
  it('works', () => expect(solutionWrapper(
      [7, 0, 2, 1, 0, 8])).toBe(true));
  it('works', () => expect(solutionWrapper(
      [8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5,
        1, 2, 6, 6, 0, 4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4,
        8, 3, 5, 9, 0, 4, 0, 1, 0, 5, 9, 2, 0, 7, 0, 2, 1, 0, 8, 2,
        5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7, 5, 1, 9, 9, 3,
        5, 0, 7, 5]
  )).toBe(true));
});
