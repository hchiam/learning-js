/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./isCompleteTree.js');

describe('index', () => {
  let n;
  it('works', () => {
    expect(solutionWrapper(null)).toBe(true);
  });
  it('works', () => {
    n = new TreeNode(1);
    expect(solutionWrapper(n)).toBe(true);
  });
  it('works', () => {
    n = new TreeNode(1);
    n.left = new TreeNode(2);
    n.left.left = new TreeNode(4);
    n.left.right = new TreeNode(5);
    n.right = new TreeNode(3);
    n.right.left = new TreeNode(6);
    expect(solutionWrapper(n)).toBe(true);
  });
  it('works', () => {
    n = new TreeNode(1);
    n.left = new TreeNode(2);
    n.left.left = new TreeNode(4);
    n.left.right = new TreeNode(5);
    n.right = new TreeNode(3);
    n.right.right = new TreeNode(7);
    expect(solutionWrapper(n)).toBe(false);
  });
  it('works', () => {
    n = new TreeNode(1);
    n.left = new TreeNode(2);
    n.left.right = new TreeNode(5);
    n.right = new TreeNode(3);
    n.right.left = new TreeNode(7);
    n.right.right = new TreeNode(8);
    expect(solutionWrapper(n)).toBe(false);
  });
  it('works', () => {
    n = new TreeNode(1);
    n.left = new TreeNode(2);
    n.left.left = new TreeNode(5);
    n.right = new TreeNode(3);
    n.right.left = new TreeNode(7);
    n.right.right = new TreeNode(8);
    expect(solutionWrapper(n)).toBe(false);
  });
  it('works', () => {
    n = new TreeNode(1);
    n.left = new TreeNode(2);
    n.left.left = new TreeNode(5);
    n.right = new TreeNode(3);
    expect(solutionWrapper(n)).toBe(true);
  });
});

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
