/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./subsets.js');

describe('the solution handles silly input', () => {
  it('works', () => expect(solutionWrapper()).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper('')).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([])).toStrictEqual([[]]));
  it('works', () => expect(solutionWrapper([1])).toStrictEqual([[], [1]]));
});

describe('the solution', () => {
  it('works with 2', () => expect(solutionWrapper([1, 2]))
      .toStrictEqual([[], [1], [2], [1, 2]]));
  it('works with 3', () => expect(solutionWrapper([1, 2, 3]))
      .toStrictEqual([[], [1], [2], [3],
        [1, 2], [1, 3], [2, 3],
        [1, 2, 3]]));
  it('works with 4', () => expect(solutionWrapper([1, 2, 3, 4]))
      .toStrictEqual([[], [1], [2], [3], [4],
        [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4],
        [1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4],
        [1, 2, 3, 4]]));
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
