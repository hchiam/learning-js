/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./searchRange.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([5, 7, 7, 8, 8, 10], 8))
        .toStrictEqual([3, 4]);
  });
  it('works', () => {
    expect(solutionWrapper([5, 7, 7, 8, 8, 10], 6))
        .toStrictEqual([-1, -1]);
  });
  it('works', () => {
    expect(solutionWrapper([1], 1))
        .toStrictEqual([0, 0]);
  });
  it('works', () => {
    expect(solutionWrapper([1], 2))
        .toStrictEqual([-1, -1]);
  });
  it('works', () => {
    expect(solutionWrapper([1, 2], 2))
        .toStrictEqual([1, 1]);
  });
  it('works', () => {
    expect(solutionWrapper([1, 2], 1))
        .toStrictEqual([0, 0]);
  });
  it('works', () => {
    expect(solutionWrapper([1, 2], 3))
        .toStrictEqual([-1, -1]);
  });
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
