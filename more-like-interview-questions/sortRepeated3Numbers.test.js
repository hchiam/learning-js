/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./sortRepeated3Numbers.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(
      [2, 0, 2, 1, 1, 0]
  )).toStrictEqual([0, 0, 1, 1, 2, 2]));

  it('works', () => expect(solutionWrapper(
      [0]
  )).toStrictEqual([0]));

  it('works', () => expect(solutionWrapper(
      [1]
  )).toStrictEqual([1]));

  it('works', () => expect(solutionWrapper(
      [2]
  )).toStrictEqual([2]));

  it('works', () => expect(solutionWrapper(
      [0, 1, 2]
  )).toStrictEqual([0, 1, 2]));

  it('works', () => expect(solutionWrapper(
      [2, 1, 0]
  )).toStrictEqual([0, 1, 2]));

  it('works', () => expect(solutionWrapper(
      [2, 0, 1]
  )).toStrictEqual([0, 1, 2]));

  it('works', () => expect(solutionWrapper(
      [1, 1, 1, 0, 0, 0]
  )).toStrictEqual([0, 0, 0, 1, 1, 1]));

  it('works', () => expect(solutionWrapper(
      [1, 2, 1, 0, 2, 0, 1, 0, 1, 2, 2, 0, 1]
  )).toStrictEqual([0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2]));
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
