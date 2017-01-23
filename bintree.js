function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insert = function(value) {
    if (value < this.value) {
        if (this.left !== null) {
            return this.left.insertLeft(value);
        } else {
            this.left = new BinaryTreeNode(value);
            return this.left;
        }
    } else {
        if (this.right !== null) {
            return this.right.insertRight(value);
        } else {
            this.right = new BinaryTreeNode(value);
            return this.right;
        }
    }
};

BinaryTreeNode.prototype.insertLeft = function(value) {
    if (this.left !== null) {
        return this.left.insertLeft(value);
    } else {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }
};

BinaryTreeNode.prototype.insertRight = function(value) {
    if (this.right !== null) {
        return this.right.insertRight(value);
    } else {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
};

BinaryTreeNode.prototype.find2ndBig = function(mynode) {
    if (mynode) {
        if (mynode.right.right !== null) {
            return this.find2ndBig(mynode.right);
        } else {
            return mynode.value;
        }
    } else {
        if (this !== null) {
            return this.find2ndBig(this);
        } else {
            return null;
        }
    }
};

function myFunction(arg) {
    // write the body of your function here
    tree = new BinaryTreeNode(5);
    tree.insert(3);
    tree.insert(6);
    tree.insert(8);
    tree.insert(10);
    console.log(tree.value);
    console.log(tree.right.value);
    console.log(tree.right.right.value);
    console.log(tree.right.right.right.value);
    return 'tree.value = ' + tree.value + '; tree.find2ndBig() = ' + tree.find2ndBig();
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(myFunction('test input'));