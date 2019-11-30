/* eslint-disable require-jsdoc */

// apparently the 3rd time I tried this question already:
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/785/

// to test this file, you can run this command in CLI:
// jest getIntersectionNode3.test.js

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 
 * This solution uses O(a + b) time and O(1) space:
 */
const getIntersectionNode = (headA, headB) => {
  if (headA === headB) return headA;
  let pHeadA = headA;
  let pHeadB = headB;
  let pA = headA;
  let pB = headB;
  while (pA !== null && pB !== null) {
    pA = pA.next;
    pB = pB.next;
  }
  while (pA !== null) {
    pA = pA.next;
    pHeadA = pHeadA.next;
  }
  while (pB !== null) {
    pB = pB.next;
    pHeadB = pHeadB.next;
  }
  while (pHeadA !== null && pHeadB !== null) {
    if (pHeadA === pHeadB) {
      return pHeadA;
    }
    pHeadA = pHeadA.next;
    pHeadB = pHeadB.next;
  }
  // otherwise no intersection
  return null;
};

function solutionWrapper(a, b) {
  return getIntersectionNode(a, b);
}

module.exports = {
  solutionWrapper,
};
