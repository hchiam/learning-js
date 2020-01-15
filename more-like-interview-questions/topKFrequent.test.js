const {solutionWrapper} = require('./topKFrequent.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([1, 1, 1, 2, 2, 3], 2))
        .toStrictEqual([1, 2]);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1, 1, 1, 2, 2], 2))
        .toStrictEqual([1, 2]);
  });
  it('works', () => {
    expect(solutionWrapper([7], 1))
        .toStrictEqual([7]);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1, 2, 1, 4, 1, 2, 5, 2, 3], 2))
        .toStrictEqual([1, 2]);
  });
  it('works', () => {
    expect(solutionWrapper([1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 4, 4, 5], 2))
        .toStrictEqual([1, 2]);
  });
  it('works', () => {
    expect(solutionWrapper([3, 1, 2, 1, 4, 1, 2, 5, 2, 4], 3))
        .toStrictEqual([1, 2, 4]);
  });
  it('works', () => {
    expect(solutionWrapper([6, 2, 1, 1, 4, 1, 7, 3, 1, 1, 2, 2, 2, 4, 5], 3))
        .toStrictEqual([1, 2, 4]);
  });
  it('works', () => {
    expect(solutionWrapper([-1, -1], 1))
        .toStrictEqual([-1]);
  });
});
