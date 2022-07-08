function pre(n, process) {
  // pre-order = me, left, right:
  if (n) process(n);
  if (n.left) pre(n.left, process); // note the recursion, not call process here
  if (n.right) pre(n.right, process); // note the recursion, not call process here
} // post-order = left, right, me; in-order = left, me, right

var n = { v: 1 };
n.left = { v: 2 };
n.right = { v: 3 };
n.left.left = { v: 4 };
n.left.right = { v: 5 };

pre(n, (x) => console.log(x.v)); // 1, 2, 4, 5, 3
