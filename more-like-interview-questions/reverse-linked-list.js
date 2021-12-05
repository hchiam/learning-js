/* eslint-disable require-jsdoc */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
  const solveIteratively = true;
  if (solveIteratively) {
    return iteratively(head);
  } else {
    return recursively(head);
  }
};

const iteratively = (head) => {
  if (!head || !head.next) return head; // if only 1 node

  // if you draw this out, the rest of the code also covers the case of only 2 nodes

  let left = head;
  let right = head.next;

  left.next = null;

  while (right) {
    const third = right.next;

    // swap:
    right.next = left;

    // advance:
    left = right;
    right = third;
  }

  return left; // not right, which will be null to escape while loop
};

const iteratively_OLD = (head) => {
  let left = null;
  let middle = head;
  while (middle) {
    const right = middle.next; // do this...
    middle.next = left;
    left = middle;
    middle = right;
    // ...since right = right.next; won't always work, unless you do if (!right) break;
  }
  return left; // since middle = right, which will be null
};

const recursively = (head) => {
  if (!head || !head.next) return head;
  const left = head;
  const middle = head.next;
  const newHead = solveRecursively(left, middle);
  head.next = null;
  return newHead;

  function solveRecursively(left, middle) {
    if (!middle) return left;

    const right = middle.next;
    middle.next = left;
    left = middle;
    middle = right;
    return solveRecursively(left, middle);
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// const result = reverseList(head);
// console.log(result.val == 5);
// console.log(result.next.val == 4);
// console.log(result.next.next.val == 3);
// console.log(result.next.next.next.val == 2);
// console.log(result.next.next.next.next.val == 1);

module.exports = {
  reverseList,
  ListNode,
};
