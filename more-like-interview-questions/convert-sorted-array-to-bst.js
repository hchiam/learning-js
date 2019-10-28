// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/* eslint-disable require-jsdoc */

/**
 * @param {number[]} numbers (assumed sorted in ascending order)
 * @return {TreeNode} (height-balanced BST)
 * recursively add middle of array to tree
 */
const sortedArrayToBST = (numbers) => {
  // handle empty input
  if (numbers.length === 0) {
    return null; // return empty tree
  }
  let outputTree = null;
  const recursivelyGetMiddle = (numbers, left, right) => {
    // 2 base cases:
    const oneElement = (left === right);
    const shouldStop = (left > right);
    if (oneElement) {
      placeNode(numbers[left]);
    } else if (shouldStop) {
      return;
    }
    const middle = Math.floor((left + right) / 2);
    const number = numbers[middle];
    placeNode(number);
    // recursion:
    recursivelyGetMiddle(numbers, middle + 1, right);
    recursivelyGetMiddle(numbers, left, middle - 1);
  };
  const placeNode = (number, node) => {
    const newNode = new TreeNode(number);
    if (outputTree === null || outputTree.val === null) {
      outputTree = newNode;
      return;
    }
    const pointer = node || outputTree;
    if (number < pointer.val) {
      if (pointer.left === null) {
        pointer.left = newNode;
      } else {
        placeNode(number, pointer.left);
      }
    } else if (pointer.val < number) {
      if (pointer.right === null) {
        pointer.right = newNode;
      } else {
        placeNode(number, pointer.right);
      }
    }
  };
  const left = 0;
  const right = numbers.length;
  recursivelyGetMiddle(numbers, left, right);
  return outputTree;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let checkNumber = 1;
let checks = '';
let gotExpected = false;
const check = (output, tree) => {
  console.log(`-------- check ${checkNumber++} ---------`);
  console.log(output);
  console.log('--------------------------');
  if ((output == null || output.length === 0) && tree === null) {
    return 'both null';
  } else if ((output == null || output.length === 0) || tree === null) {
    return 'null != something';
  }
  const isOutputValidBST = isValidBST(output);
  if (!isOutputValidBST) {
    return 'not a valid BST';
  } else if (getMaxLeafDepthDifference(output) > 1) {
    return 'got leaves with depth difference > 1';
  }
  return true;
};

const isValidBST = (root) => {
  if (root == null) return true;
  // (to prevent read errors, also check nulls in left and right)
  let goodLeftSide = (root.left == null || root.left.val < root.val);
  let goodRightSide = (root.right == null || root.val < root.right.val);
  const goodLocally = goodLeftSide && goodRightSide;
  if (!goodLocally) return false;
  goodLeftSide = checkValidBSTRecursively(root.left, -Infinity, root.val);
  goodRightSide = checkValidBSTRecursively(root.right, root.val, Infinity);
  const goodRecursively = goodLeftSide && goodRightSide;
  return goodRecursively;
};

const checkValidBSTRecursively = (node, min, max) => {
  if (node == null) return true;
  if (node.val <= min || node.val >= max) return false;
  const goodLeft = (
    node.left == null || checkValidBSTRecursively(node.left, min, node.val)
  );
  const goodRight = (
    node.right == null || checkValidBSTRecursively(node.right, node.val, max)
  );
  if (!goodLeft || !goodRight) return false;
  return true;
};

const getMaxLeafDepthDifference = (root) => {
  const depths = getAllDepths(root);
  const max = depths.reduce((a, b) => Math.max(a, b), 0);
  const min = depths.reduce((a, b) => Math.min(a, b), depths[0]);
  return max - min;
};

const getAllDepths = (root) => {
  const depths = [];
  const getDepths = (root, depth) => {
    if (root === null || root.left === null || root.right === null) {
      depths.push(depth);
    }
    if (root.left) getDepths(root.left, depth + 1);
    if (root.right) getDepths(root.right, depth + 1);
  };
  getDepths(root, 1);
  return depths;
};

let n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(3);
n.right.right = new TreeNode(3);
n.right.right.right = new TreeNode(3);
// test a few helper functions
console.log(getMaxLeafDepthDifference(n) === 2);
gotExpected = (isValidBST(n) === false);
console.log(gotExpected);
checks += (gotExpected) ? `\n${checkNumber} : OK` : `\n${checkNumber} : error`;

n = new TreeNode(2);
n.left = new TreeNode(1);
n.right = new TreeNode(3);

gotExpected = (check(sortedArrayToBST([1, 2, 3]), n));
console.log(gotExpected);
checks += (gotExpected) ? `\n${checkNumber} : OK` : `\n${checkNumber} : error`;

n = new TreeNode(1);
n.left = new TreeNode(2);
n.right = new TreeNode(3);
// this ^ should not match the extra printout

gotExpected = (check(sortedArrayToBST([1, 2, 3]), n));
console.log(gotExpected);
checks += (gotExpected) ? `\n${checkNumber} : OK` : `\n${checkNumber} : error`;

n = new TreeNode(4);
n.left = new TreeNode(2);
n.left.left = new TreeNode(1);
n.left.right = new TreeNode(3);
n.right = new TreeNode(6);
n.right.left = new TreeNode(5);
n.right.right = new TreeNode(7);

gotExpected = (check(sortedArrayToBST([1, 2, 3, 4, 5, 6, 7]), n));
console.log(gotExpected);
checks += (gotExpected) ? `\n${checkNumber} : OK` : `\n${checkNumber} : error`;

n = null; // [] should get tree with no nodes (NOT a node with val = null)

gotExpected = (check(sortedArrayToBST([]), n));
console.log(gotExpected);
checks += (gotExpected) ? `\n${checkNumber} : OK` : `\n${checkNumber} : error`;

console.log('\nRESULTS SUMMARY:');
console.log(checks);
