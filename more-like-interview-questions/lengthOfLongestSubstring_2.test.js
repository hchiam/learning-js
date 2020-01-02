/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./lengthOfLongestSubstring_2.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper('abcabcbb'))
      .toStrictEqual(3));
  it('works', () => expect(solutionWrapper('bbbbb'))
      .toStrictEqual(1));
  it('works', () => expect(solutionWrapper('pwwkew'))
      .toStrictEqual(3));
  it('works', () => expect(solutionWrapper('abcdefc'))
      .toStrictEqual(6));
  it('works', () => expect(solutionWrapper('abcdefcghijklmnop'))
      .toStrictEqual(14));
  it('works', () => expect(solutionWrapper('tmmzuxt'))
      .toStrictEqual(5));
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
