/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./multiply-nonDirectly.js');
// const {add} = require('./index.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(
      '0', '123134'
  )).toStrictEqual('0'));

  it('works', () => expect(solutionWrapper(
      '12342134', '0'
  )).toStrictEqual('0'));

  it('works', () => expect(solutionWrapper(
      '0', '0'
  )).toStrictEqual('0'));

  it('works', () => expect(solutionWrapper(
      '2', '3'
  )).toStrictEqual('6'));

  it('works', () => expect(solutionWrapper(
      '9', '9'
  )).toStrictEqual('81'));

  it('works', () => expect(solutionWrapper(
      '11', '10'
  )).toStrictEqual('110'));

  it('works', () => expect(solutionWrapper(
      '123', '456'
  )).toStrictEqual('56088'));

  it('works', () => expect(solutionWrapper(
      '456', '123'
  )).toStrictEqual('56088'));

  it('works', () => expect(solutionWrapper(
      '999', '999'
  )).toStrictEqual('998001'));

  it('works', () => expect(solutionWrapper(
      '456789', '987654'
  )).toStrictEqual('451149483006'));
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
