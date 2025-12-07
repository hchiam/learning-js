function bfs(n, x) {
  // for simplicity, check if value x exists
  if (!n) return false;
  const q = [n]; // TODO: actual queue
  while (q.length) {
    const node = q.shift(); // TODO: actual queue time O(1)
    if (node.v === x) return true;
    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }
  return false;
}

var n = { v: 1 };
n.left = { v: 2 };
n.right = { v: 3 };
n.left.left = { v: 4 };
n.left.right = { v: 5 };
console.log(bfs(n, 3), "should be true");
console.log(bfs(n, -100), "should be false");
