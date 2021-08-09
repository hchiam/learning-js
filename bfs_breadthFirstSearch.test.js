/* eslint-disable require-jsdoc */

const { solutionWrapper: bfs, Node } = require("./bfs_breadthFirstSearch.js");
const { bfs2, Node: Node2 } = require("./bfsPractice.js");

describe("the older solution", () => {
  // I.C.E.S. = Invalid, Complex, Empty, Simple

  it("works on Invalid input", () => {
    const output = [];
    bfs(-1);
    expect(output).toEqual([]);

    bfs(0, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a Complex example", () => {
    const n = new Node("A");
    n.left = new Node("B");
    n.right = new Node("C");
    n.left.left = new Node("D");
    n.right.right = new Node("F");
    const output = [];
    bfs(n, (n) => output.push(n.value));
    expect(output).toEqual(["A", "B", "C", "D", "F"]);
  });

  it("works on Empty input", () => {
    const output = [];
    bfs(null, (n) => output.push(n.value));
    expect(output).toEqual([]);

    bfs(undefined, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a Simple example", () => {
    const n = new Node("A");
    const output = [];
    bfs(n, (n) => output.push(n.value));
    expect(output).toEqual(["A"]);
  });
});

describe("the newer solution", () => {
  // I.C.E.S. = Invalid, Complex, Empty, Simple

  it("works on Invalid input", () => {
    const output = [];
    bfs2(-1);
    expect(output).toEqual([]);

    bfs2(0, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a Complex example", () => {
    const n = new Node2("A");
    n.left = new Node2("B");
    n.right = new Node2("C");
    n.left.left = new Node2("D");
    n.right.right = new Node2("F");
    const output = [];
    bfs2(n, "F", (n) => output.push(n.value));
    // expect(output).toEqual(["A", "B", "C", "D", "F"]);
    expect(output).toEqual(["F"]);
  });

  it("works on a Complex example - all matches", () => {
    const n = new Node2("A");
    n.left = new Node2("B");
    n.right = new Node2("E");
    n.left.left = new Node2("D");
    n.right.right = new Node2("E");
    const output = [];
    bfs2(n, "E", (n) => output.push(n.value));
    expect(output).toEqual(["E", "E"]);
  });

  it("works on a Complex example - only 1st match", () => {
    const n = new Node2("A");
    n.left = new Node2("B");
    n.right = new Node2("E");
    n.left.left = new Node2("D");
    n.right.right = new Node2("E");
    const output = [];
    const stopOnFirstMatch = true;
    bfs2(n, "E", (n) => output.push(n.value), stopOnFirstMatch);
    expect(output).toEqual(["E"]);
  });

  it("works on Empty input", () => {
    const output = [];
    bfs2(null, null, (n) => output.push(n.value));
    expect(output).toEqual([]);

    bfs2(undefined, null, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a Simple example", () => {
    const n = new Node2("A");
    const output = [];
    bfs2(n, "A", (n) => output.push(n.value));
    expect(output).toEqual(["A"]);
  });
});
