function generateNextNumber() {
  function* generator() {
    let number = 0;
    while (true) yield number++;
  }
  this.iterator = this.iterator ?? generator();
  return this.iterator.next().value;
}

function Node(value) {
  this.value = value;
  this.left;
  this.right;
  this.id = "_" + generateNextNumber();
}

function dfs_iter_post_order(node, callback) {
  const stack = [];
  const processed = {};
  stack.push(node);
  while (stack.length) {
    const n = stack[stack.length - 1]; // peek
    const isLeafOrProcessedChildren =
      (!n.left || processed[n.left.id]) && (!n.right || processed[n.right.id]);
    if (isLeafOrProcessedChildren) {
      if (callback) callback(n);
      processed[n.id] = true;
      stack.pop();
    } else if (n.left && !processed[n.left.id]) {
      stack.push(n.left);
    } else if (n.right && !processed[n.right.id]) {
      stack.push(n.right);
    }
  }
}

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");
// const g = new Node("g");
// const h = new Node("h");
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;
// f.left = g;
// f.right = h;

// const expect = "debghfca";
// let actual = "";
// dfs_iter_post_order(a, (n) => {
//   actual += n.value;
// });

// console.log(actual === expect);

module.exports = {
  dfs_iter_post_order,
  Node,
};
