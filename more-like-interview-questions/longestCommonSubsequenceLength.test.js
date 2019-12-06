/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./longestCommonSubsequenceLength.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(
      'gabocod', 'abcgolfood'
  )).toStrictEqual(5));

  it('works', () => expect(solutionWrapper(
      'gaobocd', 'good'
  )).toStrictEqual(4));

  it('works', () => expect(solutionWrapper(
      'aa', 'aab'
  )).toStrictEqual(2));

  it('works', () => expect(solutionWrapper(
      'aab', 'aa'
  )).toStrictEqual(2));

  it('works', () => expect(solutionWrapper(
      'aaaaaaaaaa', 'aaaaaaaaaa'
  )).toStrictEqual(10));

  it('works', () => expect(solutionWrapper(
      'aaaaaaaaaa', 'abbbbbbbbb'
  )).toStrictEqual(1));

  it('works', () => expect(solutionWrapper(
      'aaaaaaaaaa', 'bbbbbbbbbb'
  )).toStrictEqual(0));

  it('works', () => expect(solutionWrapper(
      'qwertyuiopasdfghjklzxcvbnm', 'qwertyuiopasdfghjklzxcvbnm'
  )).toStrictEqual(26));
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
