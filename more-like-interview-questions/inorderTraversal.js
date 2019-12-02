/* eslint-disable require-jsdoc */

const inorderTraversal = (node) => { // T O(n); S O(n)
  if (!node || !node.val) return [];
  // iterative solution:
  let n = node;
  const output = [];
  const stack = [];
  // while more in stack or have current node to examine:
  while (stack.length > 0 || n) {
    // go left left left until no more
    while (n) {
      stack.push(n);
      n = n.left;
    }
    // pop and read value
    n = stack.pop();
    output.push(n.val);
    n = n.right;
  }
  return output;
};

// const inorderTraversalRecursive = (node) => {
//   if (!node || !node.val) return [];
//   const output = [];
//   const recursiveCall = (node) => {
//     if (node.left) recursiveCall(node.left);
//     output.push(node.val);
//     if (node.right) recursiveCall(node.right);
//   };
//   recursiveCall(node);
//   return output;
// };

function solutionWrapper(node) {
  return inorderTraversal(node);
}

module.exports = {
  solutionWrapper,
};
