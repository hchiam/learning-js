// https://leetcode.com/problems/clone-graph/

/** Definition for a Node. */
function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * Deep clone a graph, assuming each node.val is unique.
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;

  const alreadyCloned = {};

  return recurse(node);

  function recurse(node) {
    // return memo'ed node to avoid infinite recursion "bouncing" between a pair of neighbors:
    if (node.val in alreadyCloned) return alreadyCloned[node.val];

    // clone value:
    const clone = new Node(node.val);
    alreadyCloned[node.val] = clone;

    // clone neighbors:
    node.neighbors.forEach((neighbor) => {
      let neighborToAdd = neighbor;
      if (neighbor.val in alreadyCloned) {
        neighborToAdd = alreadyCloned[neighbor.val];
      } else {
        neighborToAdd = recurse(neighbor);
      }
      clone.neighbors.push(neighborToAdd);
    });

    // return cloned node:
    return clone;
  }
};

module.exports = {
  cloneGraph,
  Node,
};
