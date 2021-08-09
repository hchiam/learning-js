function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function bfs(rootNode, targetValue, processCallback, stopOnFirstMatch) {
  const q = [];
  q.push(rootNode);
  while (q.length) {
    const n = q.shift();
    if (n?.value === targetValue) {
      if (processCallback) processCallback(n);
      if (stopOnFirstMatch) return n;
    }
    if (n?.left) q.push(n.left);
    if (n?.right) q.push(n.right);
  }
  return null;
}

// const root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// root.right.left = new Node(6);
// root.right.right = new Node(7);

// console.log(bfs(root, 5)?.value === 5);
// console.log(!bfs(root, 0)?.value);

module.exports = {
  bfs2: bfs,
  Node,
};
