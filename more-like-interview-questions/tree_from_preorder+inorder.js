// https://leetcode.com/explore/interview/card/top-interview-questions-medium/108/trees-and-graphs/788/

// 2 solutions: one iterative, one recursive

/**
 * main strategy:
 * 1) use pre-order array as order of nodes to insert
 * 2) use in-order array to determine where to insert
 * 3) add notes in-place into in-order array
 * 4) check which closest left/right neighbour has a "spot" available to add a node (except root)
 */
function buildTree(
  preOrder /* : number[] reading tree from top to bottom, like BFS */,
  inOrder /* : number[] reading tree left-to-right */
) /* : TreeNode | null */ {
  // guard check:
  const nothingToCheck = inOrder.length === 0 || preOrder.length === 0;
  if (nothingToCheck) return null;

  // set up hash table:
  const hashTableToFindInOrderNodeFaster = {};
  inOrder.forEach((value, index) => {
    hashTableToFindInOrderNodeFaster[value] = index;
  });

  // helper variables:
  let gotRoot = false;
  let indexOfRootAndSolution = null;

  // use pre-order array as order of nodes to insert:
  preOrder.forEach((value) => {
    const inOrderIndexOfNodeToInsert = hashTableToFindInOrderNodeFaster[value];
    if (!gotRoot) {
      // initialize root node:
      inOrder[inOrderIndexOfNodeToInsert] = new TreeNode(value);
      gotRoot = true;
      indexOfRootAndSolution = inOrderIndexOfNodeToInsert;
      return; // don't bother check left/right for root node
    }

    // use in-order array to determine where to insert:

    // check left:
    let left = inOrderIndexOfNodeToInsert - 1 || 0;
    while (left >= 0 && inOrder[left] instanceof TreeNode === false) {
      left--; // find nearest index on the left holding a node
    }
    const foundLeftNeighbourWithFreeSpot =
      inOrder[left] instanceof TreeNode && inOrder[left].right === null;
    if (foundLeftNeighbourWithFreeSpot) {
      // beforehand, place current node by editing in-order array in-place
      inOrder[inOrderIndexOfNodeToInsert] = new TreeNode(
        inOrder[inOrderIndexOfNodeToInsert]
      );
      // then actually add current node as child of that neighbour
      inOrder[left].right = inOrder[inOrderIndexOfNodeToInsert];
      return; // don't check right (already found valid neighbour)
    }

    // check right:
    let right = Math.min(inOrderIndexOfNodeToInsert + 1, inOrder.length - 1);
    while (
      right < inOrder.length &&
      inOrder[right] instanceof TreeNode === false
    ) {
      right++; // find nearest index on the right holding a node
    }
    const foundRightNeighbourWithFreeSpot =
      inOrder[right] instanceof TreeNode && inOrder[right].left === null;
    if (foundRightNeighbourWithFreeSpot) {
      // beforehand, place current node by editing in-order array in-place
      inOrder[inOrderIndexOfNodeToInsert] = new TreeNode(
        inOrder[inOrderIndexOfNodeToInsert]
      );
      // then actually add current node as child of that neighbour
      inOrder[right].left = inOrder[inOrderIndexOfNodeToInsert];
    }
  });

  // final answer is in the in-order array edited in-place to hold nodes:
  return inOrder[indexOfRootAndSolution];
}

/**
 * main strategy:
 * 1) use pre-order array as order of nodes to insert
 * 2) use in-order array to determine where to insert by checking indices
 * 3) check left and right sides for children by using left and right indices
 */
function buildTreeFaster(
  preOrder /* : number[] reading tree from top to bottom, like BFS */,
  inOrder /* : number[] reading tree left-to-right */
) /* : TreeNode | null */ {
  return buildTreeRecursively(0, inOrder.length - 1);

  function buildTreeRecursively(left, right) {
    const inOrderRangeHasChild = left <= right;
    if (!inOrderRangeHasChild) {
      return null;
    }

    const valueToAdd = preOrder.shift();
    const inOrderIndex = inOrder.indexOf(valueToAdd);
    const nodeToAdd = new TreeNode(valueToAdd);

    // look for children to the left of the node in the in-order index:
    nodeToAdd.left = buildTreeRecursively(left, inOrderIndex - 1);
    // look for children to the right of the node in the in-order index:
    nodeToAdd.right = buildTreeRecursively(inOrderIndex + 1, right);

    return nodeToAdd;
  }
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var output = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(JSON.stringify(output, null, 2));
output = buildTreeFaster([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(JSON.stringify(output, null, 2));

output = buildTree([], []);
console.log(JSON.stringify(output, null, 2)); // should return null
output = buildTreeFaster([], []);
console.log(JSON.stringify(output, null, 2)); // should return null

output = buildTree([1, 2, 3], [1, 3, 2]);
console.log(JSON.stringify(output, null, 2));
output = buildTreeFaster([1, 2, 3], [1, 3, 2]);
console.log(JSON.stringify(output, null, 2));

output = buildTree([1, 2, 3], [2, 3, 1]);
console.log(JSON.stringify(output, null, 2));
output = buildTreeFaster([1, 2, 3], [2, 3, 1]);
console.log(JSON.stringify(output, null, 2));
