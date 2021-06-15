/* eslint-disable require-jsdoc */

const { solutionWrapper: bfs, Node } = require("./bfs_breadthFirstSearch.js");

describe("the solution", () => {
  // I.C.E.S. = Invalid, Complex, Empty, Simple

  it("works on invalid input", () => {
    const output = [];
    bfs(-1);
    expect(output).toEqual([]);

    bfs(0, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a complex example", () => {
    const n = new Node("A");
    n.left = new Node("B");
    n.right = new Node("C");
    n.left.left = new Node("D");
    n.right.right = new Node("F");
    const output = [];
    bfs(n, (n) => output.push(n.value));
    expect(output).toEqual(["A", "B", "C", "D", "F"]);
  });

  it("works on empty input", () => {
    const output = [];
    bfs(null, (n) => output.push(n.value));
    expect(output).toEqual([]);

    bfs(undefined, (n) => output.push(n.value));
    expect(output).toEqual([]);
  });

  it("works on a simple example", () => {
    const n = new Node("A");
    const output = [];
    bfs(n, (n) => output.push(n.value));
    expect(output).toEqual(["A"]);
  });
});
