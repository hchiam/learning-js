const {solutionWrapper} = require('./index.js');

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

describe('the solution', () => {
  it('handles empty matrix', () => {
    expect(solutionWrapper(undefined, 15))
        .toStrictEqual(false);
    expect(solutionWrapper(null, 15))
        .toStrictEqual(false);
    expect(solutionWrapper([], 15))
        .toStrictEqual(false);
    expect(solutionWrapper([[]], 15))
        .toStrictEqual(false);
  });
  it('can find what is there', () => {
    expect(solutionWrapper(matrix, 5))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 3))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 17))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 30))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 1))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 18))
        .toStrictEqual(true);
    expect(solutionWrapper(matrix, 9))
        .toStrictEqual(true);
  });
  it('does not find missing values', () => {
    expect(solutionWrapper(matrix, 0))
        .toStrictEqual(false);
    expect(solutionWrapper(matrix, 12345))
        .toStrictEqual(false);
    expect(solutionWrapper(matrix, -1))
        .toStrictEqual(false);
    expect(solutionWrapper(matrix, 20))
        .toStrictEqual(false);
  });
});
