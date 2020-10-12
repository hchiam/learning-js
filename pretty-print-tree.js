function prettyPrintTree(node) {
  prettyPrintTree_recursive(node, 0);
  console.log(); // new line after tree
  function prettyPrintTree_recursive(node, level = 0) {
    if (!node || !node.value) return;
    console.log(" ".repeat(level) + node.value);
    if (node.left) {
      prettyPrintTree_recursive(node.left, level + 1);
    }
    if (node.right) {
      prettyPrintTree_recursive(node.right, level + 1);
    }
  }
}

// function prettyPrintTree(node) {
//   bf([{ node, level: 0 }]);
//   function bf(queue) {
//     var newQueue = [];
//     queue.forEach(function (obj) {
//       var { node, level } = obj;
//       console.log(" ".repeat(level) + node.value);
//       if (node.left) newQueue.push({ node: node.left, level: level + 1 });
//       if (node.right) newQueue.push({ node: node.right, level: level + 1 });
//     });
//     // console.log(newQueue);
//     if (newQueue.length) bf(newQueue);
//   }
// }

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.add = function (value) {
  // assumes valid value
  if (this.value === null) {
    this.value = value;
    return;
  }
  if (value < this.value) {
    if (this.left) {
      this.left.add(value);
    } else {
      this.left = new Node(value);
    }
  } else {
    // if value >= this.value:
    if (this.right) {
      this.right.add(value);
    } else {
      this.right = new Node(value);
    }
  }
};

var tree = new Node(3);
prettyPrintTree(tree);
tree.add(1);
prettyPrintTree(tree);
tree.add(5);
prettyPrintTree(tree);
tree.add(4);
prettyPrintTree(tree);
tree.add(6);
console.log(JSON.stringify(tree) + "\n\n");
prettyPrintTree(tree);
