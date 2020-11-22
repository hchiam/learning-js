// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var output = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(JSON.stringify(output, null, 2));

output = buildTree([], []);
console.log(JSON.stringify(output, null, 2)); // should return null

output = buildTree([1, 2, 3], [1, 3, 2]);
console.log(JSON.stringify(output, null, 2));

function buildTree(
  preorder /*: number[]*/,
  inorder /*: number[]*/
) /*: TreeNode | null*/ {
  if (inorder.length === 0 || preorder.length === 0) return null;
  const ht = {};
  inorder.forEach((value, index) => {
    ht[value] = index;
  });
  let gotRoot = false;
  let rootIndex = null;
  preorder.forEach((p) => {
    const v = p;
    const i = ht[v];
    if (!gotRoot) {
      inorder[i] = new TreeNode(v);
      gotRoot = true;
      rootIndex = i;
      return;
    }
    // check left:
    let left = i - 1 || 0;
    while (left >= 0 && inorder[left] instanceof TreeNode === false) {
      left--;
    }
    const foundLeftNeighbour =
      inorder[left] instanceof TreeNode && inorder[left].right === null;
    if (foundLeftNeighbour) {
      inorder[i] = new TreeNode(inorder[i]);
      inorder[left].right = inorder[i];
      return; // don't check right
    }
    // check right:
    let right = Math.min(i + 1, inorder.length - 1);
    while (
      right < inorder.length &&
      inorder[right] instanceof TreeNode === false
    ) {
      right++;
    }
    const foundRightNeighbour =
      inorder[right] instanceof TreeNode && inorder[right].left === null;
    if (foundRightNeighbour) {
      inorder[i] = new TreeNode(inorder[i]);
      inorder[right].left = inorder[i];
    }
  });
  return inorder[rootIndex];
}
