/* eslint-disable require-jsdoc */

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  let lca = root;
  // update lca if lca > both or < both
  while (outsideBoth(lca, p, q)) {
    if (leftOfBoth(lca, p, q)) {
      lca = lca.right;
    } else if (rightOfBoth(lca, p, q)) {
      lca = lca.left;
      // no need for these conditions:
    // } else if (lca == p) {
    //   ;
    // } else if (lca == q) {
    //   ;
    }
  }
  return lca;
};

function outsideBoth(lca, p, q) {
  return leftOfBoth(lca, p, q) || rightOfBoth(lca, p, q);
}

function rightOfBoth(lca, p, q) {
  return lca.val > p.val && lca.val > q.val;
}

function leftOfBoth(lca, p, q) {
  return lca.val < p.val && lca.val < q.val;
}

function solutionWrapper(root, p, q) {
  return lowestCommonAncestor(root, p, q);
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

module.exports = {
  solutionWrapper,
};
