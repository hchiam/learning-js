function bfs(node: BfsNode, process): (BfsNode) => any {
  if (!node) return;
  const q: BfsNode[] = [node];
  while (q.length) {
    const n: BfsNode = q.shift();
    if (n) process?.(n);
    const children: BfsNode[] = n.children?.();
    if (children) q.push(...children);
  }
}

class BfsNode {
  value: any;
  left: BfsNode;
  right: BfsNode;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  children(): BfsNode[] {
    const childNodes: BfsNode[] = [];
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

module.exports = {
  bfs,
  BfsNode,
};
