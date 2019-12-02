/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./inorderTraversal.js');
// const {add} = require('./index.js');

describe('case 1', () => {
  const n = new TreeNode();
  it('works', () => expect(solutionWrapper(n)).toStrictEqual([]));
});

describe('case 2', () => {
  const n = new TreeNode(1);
  n.right = new TreeNode(2);
  n.right.left = new TreeNode(3);
  it('works', () => expect(solutionWrapper(n)).toStrictEqual([1, 3, 2]));
});

describe('case 3', () => {
  const n = new TreeNode(1);
  n.left = new TreeNode(2);
  n.left.left = new TreeNode(4);
  n.left.right = new TreeNode(5);
  n.right = new TreeNode(3);
  n.right.left = new TreeNode(6);
  n.right.right = new TreeNode(7);
  it('works', () => expect(solutionWrapper(n)).toStrictEqual([4, 2, 5, 1, 6, 3, 7]));
});


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
