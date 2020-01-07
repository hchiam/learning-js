/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./addTwoNumbersLL.js');

describe('the solution', () => {
  const a = new ListNode(7);
  a.next = new ListNode(2);
  a.next.next = new ListNode(4);
  a.next.next.next = new ListNode(3);
  const b = new ListNode(5);
  b.next = new ListNode(6);
  b.next.next = new ListNode(4);
  const answer = new ListNode(7);
  answer.next = new ListNode(8);
  answer.next.next = new ListNode(0);
  answer.next.next.next = new ListNode(7);
  it('works', () => {
    expect(solutionWrapper(a, b))
        .toEqual(answer);
  });
});

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
