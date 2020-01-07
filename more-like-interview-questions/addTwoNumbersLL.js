/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/add-two-numbers-ii/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  // assumes non-empty lists and no leading zero unless is 0
  if (l1.val === 0) return l2;
  if (l2.val === 0) return l1;
  let p1 = getReversedLL(l1);
  let p2 = getReversedLL(l2);
  let answer = new ListNode();
  let pA = answer;
  let carry = 0;
  let sum = 0;
  while (p1 && p2) {
    sum = (p1.val + p2.val + carry);
    carry = sum - (sum % 10); // either 10 or 0
    sum -= carry; // from 0 to 9 inclusive
    carry /= 10; // either 1 or 0
    pA.val = sum;
    p1 = p1.next;
    p2 = p2.next;
    if (p1 || p2) {
      pA.next = new ListNode();
      pA = pA.next;
    }
  }
  // handle any leftover digits to carry over to
  while (p1) {
    sum = (p1.val + carry);
    carry = sum - (sum % 10); // either 10 or 0
    sum -= carry; // from 0 to 9 inclusive
    carry /= 10; // either 1 or 0
    pA.val = sum;
    p1 = p1.next;
    if (p1) {
      pA.next = new ListNode();
      pA = pA.next;
    }
  }
  while (p2) {
    sum = (p2.val + carry);
    carry = sum - (sum % 10); // either 10 or 0
    sum -= carry; // from 0 to 9 inclusive
    carry /= 10; // either 1 or 0
    pA.val = sum;
    p2 = p2.next;
    if (p2) {
      pA.next = new ListNode();
      pA = pA.next;
    }
  }
  // handle leftover carry (e.g.: 999 + 1 = 1000, extra digit)
  if (carry > 0) {
    pA.next = new ListNode(carry);
  }
  const pFinalAnswer = getReversedLL(answer);
  return pFinalAnswer;

  function getReversedLL(LL) {
    let left = LL;
    let right = left.next;
    LL.next = null;
    while (right) {
      const temp = right.next;
      right.next = left;
      left = right;
      right = temp;
    }
    return left;
  }
};

function solutionWrapper(...parameters) {
  return addTwoNumbers(...parameters);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
