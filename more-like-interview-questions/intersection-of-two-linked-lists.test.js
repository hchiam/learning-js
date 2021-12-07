const {
  getIntersectionNode,
  Node,
} = require("./intersection-of-two-linked-lists.js");

describe("intersection-of-two-linked-lists", () => {
  it("works", () => {
    const a = new Node(4);
    const a1 = new Node(1);
    const a2 = new Node(8);
    const a3 = new Node(4);
    const a4 = new Node(5);
    a.next = a1;
    a1.next = a2;
    a2.next = a3;
    a3.next = a4;
    const b = new Node(5);
    const b1 = new Node(6);
    b.next = b1;
    b1.next = a2;
    expect(getIntersectionNode(a, b)).toBe(a2);
  });
});
