/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }

maybe in-order traversal sequence that includes both nodes and get the last node that was reached "twice" in that sequence?
  if it works: time O(n) space O(n)
  but this fails with [3,1,4,2]
BCR: time O(n) space O(log n)

maybe make use of BST and use binary search to find a number between them?
  2 binary searches for each value and track paths?
  time O(n) space O(n)

or: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3384014/javascript-php-recursive-iterative-approaches/

 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // return idea1(root, p, q);
  // return idea2(root, p, q);
  // return idea3_recursive(root, p, q);
  return idea3_iterative(root, p, q);
};

/**
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3384014/javascript-php-recursive-iterative-approaches/
 */
function idea3_iterative(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (root.val < p.val && root.val < q.val) {
      root = root.right;
    } else {
      // covers if root = p or root = q, but also if p < root < q
      return root;
    }
  }
  // return null;
}

/**
https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/solutions/3384014/javascript-php-recursive-iterative-approaches/
 */
function idea3_recursive(root, p, q) {
  if (!root) return;
  if (p.val < root.val && q.val < root.val)
    return idea3_recursive(root.left, p, q);
  if (root.val < p.val && root.val < q.val)
    return idea3_recursive(root.right, p, q);
  // covers if root = p or root = q, but also if p < root < q
  return root;
}

function idea2(root, p, q) {
  const pPath = bs(root, p.val);
  const qPath = bs(root, q.val);
  const ht = {};
  for (let i = 0; i < pPath.length; i++) {
    const val = pPath[i].val;
    ht[val] = true; // assumes values are all unique
  }
  let j = qPath.length - 1;
  while (j >= 0) {
    if (qPath[j].val in ht) return qPath[j];
    j--;
  }
  function bs(n, target, path = []) {
    if (!n) return path;

    path.push(n);

    if (n.val === target) {
      return path;
    }
    if (n.val > target && n.left) {
      return bs(n.left, target, path);
    } else if (n.val < target && n.right) {
      return bs(n.right, target, path);
    }
  }
}

function idea1(root, p, q) {
  const iotData = []; // format: [{node, reached:#}, ...]
  let gotP = false;
  let gotQ = false;

  return iot(root);

  function iot(node) {
    if (!node) return;

    process(node);

    if (node.left) {
      iot(node.left);
      if (gotP && gotQ) return getLastReachedTwice();
    }

    process(node);
    if (gotP && gotQ) return getLastReachedTwice();

    if (node.right) {
      iot(node.right);
      if (gotP && gotQ) return getLastReachedTwice();
    }
  }

  function process(node) {
    if (node === p) gotP = true;
    if (node === q) gotQ = true;
    if (gotP && gotQ) return;
    if ("reached" in node) {
      node.reached++;
    } else {
      node.reached = 1;
    }
    iotData.push({ node: node, reached: node.reached });
  }

  function getLastReachedTwice() {
    let i = iotData.length - 1;
    while (i > 0 && iotData[i].reached !== 2) {
      i--;
    }
    return iotData[i].node;
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = {
  lowestCommonAncestor,
  TreeNode,
};
