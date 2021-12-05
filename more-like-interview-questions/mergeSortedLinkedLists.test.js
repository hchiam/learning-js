/* eslint-disable require-jsdoc */

const {
  mergeSortedLinkedLists,
  LinkedListNode,
  getSerializedOutput,
} = require("./mergeSortedLinkedLists.js");

describe("getSerializedOutput", () => {
  it("works with no items", () => {
    const a = new LinkedListNode();
    expect(getSerializedOutput(a)).toBe("");
  });
  it("works with 1 item", () => {
    const a = new LinkedListNode(1);
    expect(getSerializedOutput(a)).toBe("1");
  });
  it("works with multiple items", () => {
    const a = new LinkedListNode(1);
    a.next = new LinkedListNode(2);
    a.next.next = new LinkedListNode(3);
    expect(getSerializedOutput(a)).toBe("1-2-3");
  });
  it("works with items joined differently", () => {
    const a = new LinkedListNode(1);
    const b = new LinkedListNode(2);
    const c = new LinkedListNode(3);
    a.next = b;
    b.next = c;
    expect(getSerializedOutput(a)).toBe("1-2-3");
  });
});

describe("mergeSortedLinkedLists", () => {
  it("works", () => {
    const a = new LinkedListNode(2);
    a.next = new LinkedListNode(6);
    a.next.next = new LinkedListNode(7);
    a.next.next.next = new LinkedListNode(8);
    const b = new LinkedListNode(0);
    b.next = new LinkedListNode(1);
    b.next.next = new LinkedListNode(3);
    b.next.next.next = new LinkedListNode(4);
    b.next.next.next.next = new LinkedListNode(5);
    b.next.next.next.next.next = new LinkedListNode(9);
    const mergedList = mergeSortedLinkedLists(a, b);
    expect(getSerializedOutput(mergedList)).toBe("0-1-2-3-4-5-6-7-8-9");
  });
});
