/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./repeatedSubstringPattern.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(''))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('a'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('aa'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('aaa'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('aab'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('abab'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('ab'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('bab'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('ba'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('bbabba'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('bcabcd'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('abcabcabcabc'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('ababab'))
      .toStrictEqual(true));
  it('works', () => expect(solutionWrapper('bcabc'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('bcabcabcabc'))
      .toStrictEqual(false));
  it('works', () => expect(solutionWrapper('abac'))
      .toStrictEqual(false));
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
