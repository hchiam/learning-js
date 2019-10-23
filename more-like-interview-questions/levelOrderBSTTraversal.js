/* eslint-disable require-jsdoc */

const levelOrder = (node) => {
  if (node == null) return [];
  const output = [];
  const q = [];
  let currentLevel = [];
  q.push(node);
  while (q.length > 0) {
    // get level size now, since any nodes added to the queue are later levels
    const levelSize = q.length;
    // instead of storing level numbers, you can use the level size:
    for (let i = 0; i < levelSize; i++) {
      const currentNode = q.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left) {
        q.push(currentNode.left);
      }
      if (currentNode.right) {
        q.push(currentNode.right);
      }
    }
    output.push(currentLevel);
    currentLevel = [];
  }
  return output;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function check(a, b) {
  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b[i].length; j++) {
      if (a[i] == null || a[i][j] != b[i][j]) {
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
