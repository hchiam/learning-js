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
  if (head == null || head.next == null) return head;
  let prev = null;
  let curr = head;
  let next = head.next;
  head.next = null;
  while (next != null) {
    prev = curr;
    curr = next;
    next = next.next;
    curr.next = prev;
  }
  return curr;
};

const recursively = (head) => {
  if (head == null || head.next == null) {
    return head;
  } else {
    const prev = head;
    let curr = head.next;
    curr = recursivelySolve(prev, curr);
    head.next = null;
    return curr;
  }
};

const recursivelySolve = (prev, curr) => {
  if (prev == null || curr == null) {
    return prev;
  } else {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
    return recursivelySolve(prev, curr);
  }
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const result = reverseList(head);
console.log(result.val == 5);
console.log(result.next.val == 4);
console.log(result.next.next.val == 3);
console.log(result.next.next.next.val == 2);
console.log(result.next.next.next.next.val == 1);
