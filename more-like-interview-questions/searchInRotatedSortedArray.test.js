/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./searchInRotatedSortedArray.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([4, 5, 6, 7, 0, 1, 2], 0))
        .toStrictEqual(4);
  });
  it('works', () => {
    expect(solutionWrapper([4, 5, 6, 7, 0, 1, 2], 3))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([0, 1, 2, 4, 5, 6, 7], 0))
        .toStrictEqual(0);
  });
  it('works', () => {
    expect(solutionWrapper([0, 1, 2, 4, 5, 6, 7], 7))
        .toStrictEqual(6);
  });
  it('works', () => {
    expect(solutionWrapper([], 7))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([2, 4, 5, 6, 7, 0, 1], 0))
        .toStrictEqual(5);
  });
  it('works', () => {
    expect(solutionWrapper([2, 4, 5, 6, 7, 0, 1], 3))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([1, 2, 4], 0))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([1, 3], 0))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([1, 3], 1))
        .toStrictEqual(0);
  });
  it('works', () => {
    expect(solutionWrapper([1, 3], 3))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1], 3))
        .toStrictEqual(0);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1], 1))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1], 0))
        .toStrictEqual(-1);
  });
  it('works', () => {
    expect(solutionWrapper([5, 1, 2, 3, 4], 1))
        .toStrictEqual(1);
  });
});
