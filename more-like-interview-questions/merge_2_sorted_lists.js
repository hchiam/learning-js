// https://leetcode.com/problems/merge-two-sorted-lists

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} a, one sorted linked list
 * @param {ListNode} b, another sorted linked list
 * @return {ListNode}, one merged sorted linked list
 */
const mergeTwoSortedLists = function (a, b) {
  // cover cases of 1 or both lists empty
  if (!a) return b;
  if (!b) return a;

  // setup
  let curr = null;
  if (a.val <= b.val) {
    curr = a;
    a = a.next;
  } else {
    curr = b;
    b = b.next;
  }
  let head = curr;

  // add on values in order
  while (a && b) {
    if (a.val <= b.val) {
      // add a to list
      curr.next = a;
      curr = curr.next;
      a = a.next;
    } else {
      // add b to list
      curr.next = b;
      curr = curr.next;
      b = b.next;
    }
  }

  // cover case of one of the lists still has more items
  if (a) curr.next = a;
  if (b) curr.next = b;

  // final answer
  return head;
};

module.exports = {
  mergeTwoSortedLists,
  ListNode,
};
