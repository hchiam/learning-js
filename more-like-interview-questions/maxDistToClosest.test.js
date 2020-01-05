/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./maxDistToClosest.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper([1, 0]))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([0, 1]))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([1, 0, 0, 0, 1, 0, 1]))
        .toStrictEqual(2);
  });
  it('works', () => {
    expect(solutionWrapper([1, 0, 0, 0]))
        .toStrictEqual(3);
  });
  it('works', () => {
    expect(solutionWrapper([1, 1, 1, 0]))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([0, 1, 1, 1]))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([1, 1, 1, 0, 1, 1]))
        .toStrictEqual(1);
  });
  it('works', () => {
    expect(solutionWrapper([0, 0, 0, 1, 0, 0, 0]))
        .toStrictEqual(3);
  });
  it('works', () => {
    expect(solutionWrapper([0, 0, 0, 0, 1, 0, 0, 0]))
        .toStrictEqual(4);
  });
  it('works', () => {
    expect(solutionWrapper([0, 0, 0, 1, 0, 0, 0, 0]))
        .toStrictEqual(4);
  });
  it('works', () => {
    expect(solutionWrapper([0, 0, 1, 0, 1, 1]))
        .toStrictEqual(2);
  });
  it('works', () => {
    expect(solutionWrapper([1, 1, 0, 1, 0, 0]))
        .toStrictEqual(2);
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
