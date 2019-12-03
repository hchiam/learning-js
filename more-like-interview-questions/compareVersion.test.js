/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./compareVersion.js');
// const {add} = require('./index.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(
      '0.1', '1.1'
  )).toStrictEqual(-1));
  it('works', () => expect(solutionWrapper(
      '0.01', '1.1'
  )).toStrictEqual(-1));
  it('works', () => expect(solutionWrapper(
      '1.2', '1.1'
  )).toStrictEqual(1));
  it('works', () => expect(solutionWrapper(
      '1.1', '1.1'
  )).toStrictEqual(0));
  it('works', () => expect(solutionWrapper(
      '1.2', '1.10'
  )).toStrictEqual(-1));
  it('works', () => expect(solutionWrapper(
      '1', '1.10'
  )).toStrictEqual(-1));
  it('works', () => expect(solutionWrapper(
      '1.2', '1'
  )).toStrictEqual(1));
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
