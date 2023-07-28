/* eslint-disable require-jsdoc */

const { maxPathSum } = require("./binary-tree-maximum-path-sum.js");

describe("maxPathSum", () => {
  it("works on 3 positive nodes: [1,2,3]", () => {
    const binaryTree = {
      val: 1,
      left: { val: 2, left: null, right: null },
      right: { val: 3, left: null, right: null },
    };
    expect(maxPathSum(binaryTree)).toBe(6);
  });
  it("works on a tree with a negative root node: [-10,9,20,null,null,15,7]", () => {
    const binaryTree = {
      val: -10,
      left: { val: 9, left: null, right: null },
      right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null },
      },
    };
    expect(maxPathSum(binaryTree)).toBe(42);
  });
  it("works on a big positive tree: [5,4,8,11,null,13,4,7,2,null,null,null,1]", () => {
    const binaryTree = {
      val: 5,
      left: {
        val: 4,
        left: {
          val: 11,
          left: { val: 7, left: null, right: null },
          right: { val: 2, left: null, right: null },
        },
        right: null,
      },
      right: {
        val: 8,
        left: { val: 13, left: null, right: null },
        right: {
          val: 4,
          left: null,
          right: { val: 1, left: null, right: null },
        },
      },
    };
    expect(maxPathSum(binaryTree)).toBe(48);
  });
  it("works on a big tree with some negatives inside: [1,-2,-3,1,3,-2,null,-1]", () => {
    const binaryTree = {
      val: 1,
      left: {
        val: -2,
        left: {
          val: 1,
          left: { val: -1, left: null, right: null, maxSingleArm: -1 },
          right: null,
          maxSingleArm: 1,
        },
        right: { val: 3, left: null, right: null, maxSingleArm: 3 },
        maxSingleArm: 3,
      },
      right: {
        val: -3,
        left: { val: -2, left: null, right: null, maxSingleArm: -2 },
        right: null,
        maxSingleArm: -2,
      },
      maxSingleArm: 4,
    };
    expect(maxPathSum(binaryTree)).toBe(3);
  });
});
