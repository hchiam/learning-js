/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./getIntersectionNode3.js');
// const {add} = require('./index.js');

describe('case 1', () => {
  const a = new ListNode(4);
  a.next = new ListNode(1);
  a.next.next = new ListNode(8);
  a.next.next.next = new ListNode(4);
  a.next.next.next.next = new ListNode(5);
  const b = new ListNode(5);
  b.next = new ListNode(0);
  b.next.next = new ListNode(1);
  b.next.next.next = a.next.next;
  it('works', () => expect(solutionWrapper(a, b)).toBe(a.next.next));
  it('works', () => expect(solutionWrapper(a, b)).toBe(b.next.next.next));
});

describe('case 2', () => {
  const a = new ListNode(0);
  a.next = new ListNode(9);
  a.next.next = new ListNode(1);
  a.next.next.next = new ListNode(2);
  a.next.next.next.next = new ListNode(4);
  const b = new ListNode(3);
  b.next = a.next.next.next;
  it('works', () => expect(solutionWrapper(a, b)).toBe(a.next.next.next));
  it('works', () => expect(solutionWrapper(a, b)).toBe(b.next));
});

describe('case 3', () => {
  const a = new ListNode(2);
  a.next = new ListNode(6);
  a.next.next = new ListNode(4);
  const b = new ListNode(1);
  b.next = new ListNode(5);
  it('works', () => expect(solutionWrapper(a, b)).toBe(null));
});

describe('case 4', () => {
  const a = new ListNode(3);
  const b = new ListNode(2);
  b.next = a;
  it('works', () => expect(solutionWrapper(a, b)).toBe(a));
});

function ListNode(val) {
  this.val = val;
  this.next = null;
}
