/*eslint-disable require-jsdoc */

const { solutionWrapper } = require("./zig-zag-binary-tree-traversal.js");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

describe("perfect binary tree", () => {
  const n = new TreeNode(1);
  n.left = new TreeNode(2);
  n.left.left = new TreeNode(4);
  n.left.right = new TreeNode(5);
  n.right = new TreeNode(3);
  n.right.left = new TreeNode(6);
  n.right.right = new TreeNode(7);
  it("works", () =>
    expect(solutionWrapper(n)).toStrictEqual([[1], [3, 2], [4, 5, 6, 7]]));
});

describe("complete binary tree", () => {
  const n = new TreeNode(1);
  n.left = new TreeNode(2);
  n.left.left = new TreeNode(4);
  n.left.right = new TreeNode(5);
  n.right = new TreeNode(3);
  it("works", () =>
    expect(solutionWrapper(n)).toStrictEqual([[1], [3, 2], [4, 5]]));
});

describe("NON-complete binary tree", () => {
  const n = new TreeNode(1);
  n.left = new TreeNode(2);
  n.right = new TreeNode(3);
  n.right.left = new TreeNode(4);
  n.right.right = new TreeNode(5);
  it("works", () =>
    expect(solutionWrapper(n)).toStrictEqual([[1], [3, 2], [4, 5]]));
});

describe("NON-FULL binary tree", () => {
  const n = new TreeNode(1);
  n.left = new TreeNode(2);
  n.left.left = new TreeNode(4);
  n.right = new TreeNode(3);
  n.right.right = new TreeNode(5);
  it("works", () =>
    expect(solutionWrapper(n)).toStrictEqual([[1], [3, 2], [4, 5]]));
});
