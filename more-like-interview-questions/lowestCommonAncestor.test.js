const { lowestCommonAncestor, TreeNode } = require("./lowestCommonAncestor");

describe("lowestCommonAncestor", () => {
  it("[6,2,8,0,4,7,9,null,null,3,5], 2, 8", () => {
    const root = new TreeNode(6);

    root.left = new TreeNode(2);
    root.right = new TreeNode(8);

    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);

    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    const p = new TreeNode(2);
    const q = new TreeNode(8);

    expect(lowestCommonAncestor(root, p, q)).toBe(root);
  });

  it("[6,2,8,0,4,7,9,null,null,3,5], 2, 4", () => {
    const root = new TreeNode(6);

    root.left = new TreeNode(2);
    root.right = new TreeNode(8);

    root.left.left = new TreeNode(0);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(7);
    root.right.right = new TreeNode(9);

    root.left.right.left = new TreeNode(3);
    root.left.right.right = new TreeNode(5);

    const p = new TreeNode(2);
    const q = new TreeNode(4);

    expect(lowestCommonAncestor(root, p, q).val).toBe(root.left.val);
  });

  it("[2,1], 2, 1", () => {
    const root = new TreeNode(2);

    root.left = new TreeNode(1);

    const p = new TreeNode(2);
    const q = new TreeNode(1);

    expect(lowestCommonAncestor(root, p, q)).toBe(root);
  });

  it("[3,1,4,null,2], 2, 3", () => {
    const root = new TreeNode(3);

    root.left = new TreeNode(1);
    root.right = new TreeNode(4);

    root.left.right = new TreeNode(2);

    const p = new TreeNode(2);
    const q = new TreeNode(3);

    expect(lowestCommonAncestor(root, p, q)).toBe(root);
  });
});
