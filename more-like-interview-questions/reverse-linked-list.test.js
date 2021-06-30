const { reverseList, ListNode } = require("./reverse-linked-list.js");

describe("reverseList", () => {
  it("works on [1,2,3,4,5]", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const result = reverseList(head);
    expect(result.val).toBe(5);
    expect(result.next.val).toBe(4);
    expect(result.next.next.val).toBe(3);
    expect(result.next.next.next.val).toBe(2);
    expect(result.next.next.next.next.val).toBe(1);
  });

  it("works on [1,2]", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);

    const result = reverseList(head);
    expect(result.val).toBe(2);
    expect(result.next.val).toBe(1);
  });

  it("works on [1]", () => {
    const head = new ListNode(1);

    const result = reverseList(head);
    expect(result.val).toBe(1);
    expect(result.next).toBe(null);
  });

  it("works on []", () => {
    const head = null;

    const result = reverseList(head);
    expect(result).toBe(null);
  });
});
