/* eslint-disable require-jsdoc */

const { bfs, BfsNode } = require("./bfs_breadthFirstSearch.js");

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
    const n = new BfsNode("A");
    n.left = new BfsNode("B");
    n.right = new BfsNode("C");
    n.left.left = new BfsNode("D");
    n.right.right = new BfsNode("F");
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
    const n = new BfsNode("A");
    const output = [];
    bfs(n, (n) => output.push(n.value));
    expect(output).toEqual(["A"]);
  });
});
