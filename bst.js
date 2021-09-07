// nodemon -x 'node bst.js'

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    // O(log n)-O(n) time, O(n) space (or O(1) additional besides the BST itself)
    let pointer = this;
    while (true) {
      if (value < pointer.value) {
        if (pointer.left) {
          pointer = pointer.left;
        } else {
          pointer.left = new BST(value);
          break;
        }
      } else {
        if (pointer.right) {
          pointer = pointer.right;
        } else {
          pointer.right = new BST(value);
          break;
        }
      }
    }

    return this;
  }

  contains(value) {
    // O(log n)-O(n) time, O(1) space
    let pointer = this;
    while (pointer) {
      if (pointer.value === value) return true;
      if (value < pointer.value) {
        pointer = pointer.left;
      } else {
        pointer = pointer.right;
      }
    }
    return false;
  }

  remove(value) {
    // O(log n)-O(n) time, O(1) space
    // can't remove if single-node tree
    // simply remove if is leaf and is not root
    // otherwise replace with .right.left-most

    let parent = new BST("dummy variable");
    parent.right = this;
    let toDelete = this;

    // find:
    while (toDelete) {
      const foundFirstMatch = value === toDelete.value;
      if (foundFirstMatch) break;
      if (value < toDelete.value) {
        parent = toDelete;
        toDelete = toDelete.left;
      } else {
        parent = toDelete;
        toDelete = toDelete.right;
      }
    }

    if (!toDelete) return this;

    if (parent.value === "dummy variable") {
      // toDelete is at root
      if (!toDelete.left && !toDelete.right) {
        // problem says you can't remove if single node tree
        return this;
      } else if (toDelete.left && !toDelete.right) {
        // handle toDelete === parent by replacing props of current node
        toDelete.value = toDelete.left.value;
        toDelete.right = toDelete.left.right;
        toDelete.left = toDelete.left.left; // do this last to avoid breaking .right = ...
      } else if (!toDelete.left && toDelete.right) {
        // handle toDelete === parent by replacing props of current node
        toDelete.value = toDelete.right.value;
        toDelete.left = toDelete.right.left;
        toDelete.right = toDelete.right.right; // do this last to avoid breaking .left = ...
      } else if (toDelete.left && toDelete.right) {
        // replace node to delete with its smallest i.e. .right.left-most node:
        let minChildParent = toDelete;
        let minChild = toDelete.right;
        while (minChild && minChild.left) {
          minChildParent = minChild;
          minChild = minChild.left;
        }
        // replace now = min child of toDelete, and must exist since toDelete.right exists:
        // so swap values and delete the minChild:
        toDelete.value = minChild.value;
        if (minChildParent.left === minChild) {
          minChildParent.left = null;
        } else {
          minChildParent.right = null;
        }
      }
    } else if (!toDelete.left && !toDelete.right) {
      // simply remove the leaf (non-root leaf):
      if (parent.left === toDelete) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    } else if (toDelete.left && !toDelete.right) {
      // re-graft left subtree to parent:
      if (parent.left === toDelete) {
        parent.left = toDelete.left;
      } else {
        parent.right = toDelete.left;
      }
    } else if (!toDelete.left && toDelete.right) {
      // re-graft right subtree to parent:
      if (parent.left === toDelete) {
        parent.left = toDelete.right;
      } else {
        parent.right = toDelete.right;
      }
    } else if (toDelete.left && toDelete.right) {
      // replace node to delete with its smallest i.e. .right.left-most node:
      let minChildParent = toDelete;
      let minChild = toDelete.right;
      while (minChild && minChild.left) {
        minChildParent = minChild;
        minChild = minChild.left;
      }
      // replace now = min child of toDelete, and must exist since toDelete.right exists:
      // so swap values and delete the minChild:
      toDelete.value = minChild.value;
      if (minChildParent.left === minChild) {
        minChildParent.left = null;
      } else {
        minChildParent.right = null;
      }
    }

    return this;
  }
}

const a = new BST(10);
a.left = new BST(5);
a.left.left = new BST(2);
a.left.left.left = new BST(1);
a.left.right = new BST(5);
a.right = new BST(15);
a.right.left = new BST(13);
a.right.left.right = new BST(14);
a.right.right = new BST(22);

a.insert(12);
console.log(a.right.left.left.value === 12);

a.remove(10);
console.log(a.contains(10) === false);
console.log(a.value === 12);

console.log(a.contains(15) === true);

const b = new BST(10);
b.insert(5);
b.insert(15);
b.remove(5);
b.remove(15);
b.remove(10);
console.log(b.contains(10) === true);
console.log(b.contains(5) === false);
console.log(b.contains(15) === false);

const c = new BST(1);
c.insert(2);
c.insert(3);
c.insert(4);
c.remove(1);
console.log(c.contains(1) === false);
console.log(c.contains(2) === true);
console.log(c.contains(3) === true);
console.log(c.contains(4) === true);

const d = new BST(10);
d.insert(5);
d.remove(10);
console.log(d.contains(5) === true);
console.log(d.contains(10) === false);
console.log(d.contains(15) === false);
console.log(d.value === 5);
console.log(d.left === null);
console.log(d.right === null);
