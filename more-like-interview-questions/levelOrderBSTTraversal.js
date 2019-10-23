/* eslint-disable require-jsdoc */

const levelOrder = (node) => {
  if (node == null) return [];
  const output = [];
  let level = 1;
  const q = [];
  let currentLevel = [];
  q.push({node, level});
  while (q.length > 0) {
    const currentNode = q.shift();
    if (currentNode.level !== level) {
      output.push(currentLevel);
      currentLevel = [currentNode.node.val];
      level++;
    } else {
      currentLevel.push(currentNode.node.val);
    }
    if (currentNode.node.left) {
      q.push({node: currentNode.node.left, level: currentNode.level + 1});
    }
    if (currentNode.node.right) {
      q.push({node: currentNode.node.right, level: currentNode.level + 1});
    }
  }
  if (currentLevel.length > 0) {
    output.push(currentLevel);
  }
  return output;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function check(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] != b[i][j]) {
        return false;
      }
    }
  }
  return true;
}

/**
 *   3
   / \
  9  20
    /  \
   15   7
 */

const n = new TreeNode(3);
n.left = new TreeNode(9);
n.right = new TreeNode(20);
n.right.left = new TreeNode(15);
n.right.right = new TreeNode(7);

console.log(check(levelOrder(n), [
  [3],
  [9, 20],
  [15, 7],
]) ? 'ok' : 'error');

console.log(check(levelOrder(null), []) ? 'ok' : 'error');
