/* eslint-disable require-jsdoc */

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  // handle invalid input and trivial cases
  if (root === null) return true;
  if (root.left === null && root.right === null) return true;
  if (root.left === null) return false;
  if (root.right === null) return false;

  const useRecursive = true;
  if (useRecursive) {
    return isSymmetricRecursive(root.left, root.right);
  } else {
    return isSymmetricIterative(root);
  }
};

const isSymmetricRecursive = (left, right) => {
  // DFS
  if (left === null && right === null) return true;
  if (left === null) return false;
  if (right === null) return false;
  if (left.val != right.val) return false;
  const goodOuter = isSymmetricRecursive(left.left, right.right);
  const goodInner = isSymmetricRecursive(left.right, right.left);
  return goodOuter && goodInner;
};

const isSymmetricIterative = (root) => {
  // BFS (queue) except you process pairs (dequeue/queue/compare)
  const q = [];
  q.push(root.left);
  q.push(root.right);
  while (q.length > 0) {
    const left = q.shift();
    const right = q.shift();
    if (left == null && right == null) continue;
    if (left == null) return false;
    if (right == null) return false;
    if (left.val !== right.val) return false;
    // otherwise ok so far,
    // so add left/right nodes in "mirror pairs" for later comparison
    q.push(left.left);
    q.push(right.right);
    q.push(left.right);
    q.push(right.left);
  }
  // otherwise no errors found
  return true;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let n = new TreeNode(1);

console.log(isSymmetric(n) === true ? 'ok' : 'wrong');

n = null;

console.log(isSymmetric(n) === true ? 'ok' : 'wrong');

n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(2);
n.left.left = new TreeNode(3);
n.right.right = new TreeNode(3);
n.left.right = new TreeNode(4);
n.right.left = new TreeNode(4);

console.log(isSymmetric(n) === true ? 'ok' : 'wrong');

n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(2);
n.left.left = new TreeNode(3);
n.right.right = new TreeNode(3);

console.log(isSymmetric(n) === true ? 'ok' : 'wrong');

n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(2);
n.left.right = new TreeNode(3);
n.right.right = new TreeNode(3);

console.log(isSymmetric(n) === false ? 'ok' : 'wrong');

n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(2);
n.left.left = new TreeNode(3);
n.right.right = new TreeNode(3);
n.left.right = new TreeNode(4);
n.right.left = new TreeNode(5);

console.log(isSymmetric(n) === false ? 'ok' : 'wrong');
