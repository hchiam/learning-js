/* eslint-disable require-jsdoc */

const { mergeTwoSortedLists, ListNode } = require("./merge_2_sorted_lists.js");

describe("the solution", () => {
  it("works", () => {
    const a = new ListNode(1);
    a.next = new ListNode(2);
    a.next.next = new ListNode(4);
    const b = new ListNode(1);
    b.next = new ListNode(3);
    b.next.next = new ListNode(4);
    const output = mergeTwoSortedLists(a, b);
    const o0 = output.val;
    const o1 = output.next.val;
    const o2 = output.next.next.val;
    const o3 = output.next.next.next.val;
    const o4 = output.next.next.next.next.val;
    const o5 = output.next.next.next.next.val;
    expect(o0).toBe(1);
    expect(o1).toBe(1);
    expect(o2).toBe(2);
    expect(o3).toBe(3);
    expect(o4).toBe(4);
    expect(o5).toBe(4);
  });
});
