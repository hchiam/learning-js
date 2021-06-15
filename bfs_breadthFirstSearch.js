function bfs(node, process) {
  if (!node) return;
  const q = [node];
  while (q.length) {
    const n = q.shift();
    if (n) process?.(n);
    const children = n.children?.();
    if (children) q.push(...children);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  children() {
    const childNodes = [];
    if (this.left) childNodes.push(this.left);
    if (this.right) childNodes.push(this.right);
    return childNodes;
  }
}

// just for testing:

// const n = new Node("A");
// n.left = new Node("B");
// n.right = new Node("C");
// n.left.left = new Node("D");
// n.left.right = new Node("E");
// n.right.right = new Node("F");

// console.log(bfs(n, (n) => console.log(n.value)));

function solutionWrapper(...parameters) {
  return bfs(...parameters);
}

module.exports = {
  solutionWrapper,
  Node,
};
