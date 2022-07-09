function dfs(n, x) {
  // for simplicity, check if value x exists
  if (!n && n.v !== x) return false;
  if (n.v === x) return true;
  const inLeft = n.left ? dfs(n.left, x) : false;
  const inRight = !inLeft && n.right ? dfs(n.right, x) : false;
  return inLeft || inRight;
}

var n = { v: 1 };
n.left = { v: 2 };
n.right = { v: 3 };
n.left.left = { v: 4 };
n.left.right = { v: 5 };
console.log(dfs(n, 3), "should be true");
console.log(dfs(n, -100), "should be false");
