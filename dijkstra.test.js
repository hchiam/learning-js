const { dijkstra } = require("./dijkstra.js");

describe("Dijkstra algorithm", () => {
  it("works", () => {
    const graph = {
      // in adjacency list format:
      A: [
        { nodeName: "B", distance: 5 },
        { nodeName: "D", distance: 9 },
        { nodeName: "E", distance: 1 },
      ],
      B: [
        { nodeName: "A", distance: 5 },
        { nodeName: "C", distance: 2 },
      ],
      C: [
        { nodeName: "B", distance: 2 },
        { nodeName: "D", distance: 6 },
      ],
      D: [
        { nodeName: "A", distance: 9 },
        { nodeName: "C", distance: 6 },
        { nodeName: "E", distance: 2 },
      ],
      E: [
        { nodeName: "A", distance: 1 },
        { nodeName: "D", distance: 2 },
      ],
    };

    const origin = "A";

    const distances = dijkstra(origin, graph);

    expect(JSON.stringify(distances)).toBe('{"A":0,"B":5,"C":7,"D":3,"E":1}');
  });
});
