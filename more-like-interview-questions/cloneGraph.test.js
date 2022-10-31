const { cloneGraph, Node } = require("./cloneGraph.js");

describe("cloneGraph", () => {
  it("works on empty input", () => {
    const actual = cloneGraph();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
  it("works on a single node", () => {
    const n1 = new Node(1, []);
    const actual = cloneGraph(n1);
    const expected = n1;
    expect(actual).not.toBe(expected); // not the same instance
    expect(actual).toEqual(expected); // but cloned values and neighbor connections
  });
  it("works on a more complicated graph (contains circular references)", () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    n1.neighbors.push(n2);
    n1.neighbors.push(n4);
    n2.neighbors.push(n1);
    n2.neighbors.push(n3);
    n3.neighbors.push(n2);
    n3.neighbors.push(n4);
    n4.neighbors.push(n1);
    n4.neighbors.push(n3);
    const actual = cloneGraph(n1);
    const expected = n1;
    expect(actual).not.toBe(expected); // not the same instance
    expect(actual).toEqual(expected); // but cloned values and neighbor connections
  });
});
