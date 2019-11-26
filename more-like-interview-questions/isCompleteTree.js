/* eslint-disable require-jsdoc */

function isCompleteTree(root) {
  if (!root || (!root.left && !root.right)) return true;
  // BFS but stop at first null and check length
  let seen = 0;
  const q = [];
  q.push({node: root, order: 1});
  while (q.length > 0) {
    const n = q.shift();
    seen++;
    if (!n.node && seen !== n.order) return false;
    if (n.node) {
      q.push({node: n.node.left, order: n.order * 2});
      q.push({node: n.node.right, order: n.order * 2 + 1});
    }
    if (q.length === 0) {
      return seen === n.order;
    }
  }
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

function solutionWrapper(params) {
  return isCompleteTree(params);
}

module.exports = {
  solutionWrapper,
};
