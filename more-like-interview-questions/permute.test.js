/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./permute.js');

describe('the solution handles silly input', () => {
  it('works', () => expect(solutionWrapper()).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper('')).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([])).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([1])).toStrictEqual([[1]]));
});

describe('the solution', () => {
  it('works with 2', () => expect(solutionWrapper([1, 2]))
      .toStrictEqual([[1, 2], [2, 1]]));
  it('works with 3', () => expect(solutionWrapper([1, 2, 3]))
      .toStrictEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3],
        [2, 3, 1], [3, 1, 2], [3, 2, 1]]));
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
