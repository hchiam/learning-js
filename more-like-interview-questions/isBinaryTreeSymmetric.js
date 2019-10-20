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

  return isSymmetric_recursive(root.left, root.right);
  // return isSymmetric_iterative(root);
};

const isSymmetric_recursive = (left, right) => {
  // DFS
  if (left === null && right === null) return true;
  if (left === null) return false;
  if (right === null) return false;
  if (left.val != right.val) return false;
  const goodOuter = isSymmetric_recursive(left.left, right.right);
  const goodInner = isSymmetric_recursive(left.right, right.left);
  return goodOuter && goodInner;
};

const isSymmetric_iterative = (root) => {
  // BFS (queue)
  const q = [
    {
      node: root,
      depth: 1,
    },
  ];
  let currentDepth = 1;
  let levelLooks = [];
  while (q.length > 0) {
    const e = q.shift();
    if (e.depth !== currentDepth) {
      // check if is palindrome
      if (!isPalindromeArray(levelLooks)) return false;
      if (isAllNullArray(levelLooks)) {
        // got to bottom
        return true;
      }
      levelLooks = e.node ? [e.node.val] : [];
      currentDepth++;
    } else {
      // "concatenate string" of current level
      levelLooks.push(e.node ? e.node.val : null);
    }
    if (e.node && e.node.left) {
      q.push(
          {
            node: e.node.left,
            depth: currentDepth + 1,
          },
      );
    } else {
      q.push(
          {
            node: new TreeNode(null),
            depth: currentDepth + 1,
          },
      );
    }
    if (e.node && e.node.right) {
      q.push(
          {
            node: e.node.right,
            depth: currentDepth + 1,
          },
      );
    } else {
      q.push(
          {
            node: new TreeNode(null),
            depth: currentDepth + 1,
          },
      );
    }
  }
  // otherwise
  return true;
};

const isPalindromeArray = (arr) => {
  let left = 0;
  let right = arr.length-1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
};

const isAllNullArray = (arr) => {
  if (arr.length < 1) return false;
  return arr.every((e) => e === null);
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
