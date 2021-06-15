function bfs(node, process) {
  var _a;
  if (!node) return;
  var q = [node];
  while (q.length) {
    var n = q.shift();
    if (n) process === null || process === void 0 ? void 0 : process(n);
    var children =
      (_a = n.children) === null || _a === void 0 ? void 0 : _a.call(n);
    if (children) q.push.apply(q, children);
  }
}
var BfsNode = /** @class */ (function () {
  function BfsNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  BfsNode.prototype.children = function () {
    var childNodes = [];
    if (this.left) childNodes.push(this.left);
    if (this.right) childNodes.push(this.right);
    return childNodes;
  };
  return BfsNode;
})();
// just for testing:
// const n = new Node("A");
// n.left = new Node("B");
// n.right = new Node("C");
// n.left.left = new Node("D");
// n.left.right = new Node("E");
// n.right.right = new Node("F");
// console.log(bfs(n, (n) => console.log(n.value)));
module.exports = {
  bfs: bfs,
  BfsNode: BfsNode,
};
