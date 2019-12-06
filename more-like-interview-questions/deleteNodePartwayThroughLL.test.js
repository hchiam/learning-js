/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./deleteNodePartwayThroughLL.js');

describe('the solution', () => {
  const n = new ListNode(4);
  n.next = new ListNode(5); // <-- delete this one
  n.next.next = new ListNode(1);
  n.next.next.next = new ListNode(9);
  const answer = new ListNode(4);
  answer.next = new ListNode(1);
  answer.next.next = new ListNode(9);
  solutionWrapper(n.next);
  it('works', () => expect(n).toStrictEqual(answer));
});

describe('the solution', () => {
  const n = new ListNode(4);
  n.next = new ListNode(5);
  n.next.next = new ListNode(1); // <-- delete this one
  n.next.next.next = new ListNode(9);
  const answer = new ListNode(4);
  answer.next = new ListNode(5);
  answer.next.next = new ListNode(9);
  solutionWrapper(n.next.next);
  it('works', () => expect(n).toStrictEqual(answer));
});

describe('the solution', () => {
  const n = new ListNode(4);
  n.next = new ListNode(5);
  n.next.next = new ListNode(1);
  n.next.next.next = new ListNode(9); // <-- delete this one
  const answer = new ListNode(4);
  answer.next = new ListNode(5);
  answer.next.next = new ListNode(1);
  answer.next.next.next = new ListNode(9);
  solutionWrapper(n.next.next.next);
  it('works', () => expect(n).toStrictEqual(answer)); // expect unchanged b/c assumptions
});

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
