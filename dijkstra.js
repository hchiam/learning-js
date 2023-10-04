// to run test case(s), run this:
// jest dijkstra.test.js

const { PriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * Dijkstra's algorithm is basically BFS (Breadth-First Search) but ideally with a priority queue instead of a FIFO queue.
 */
function dijkstra(originNodeName, graph) {
  const distances = {}; // will return this
  // const q = []; // FIFO queue (doesn't guarantee shortest path
  // const q = new PriorityQueue((a, b) => (a.distance < b.distance ? -1 : 1)); // priority queue (min heap) to guarantee shortest path
  const q = new PriorityQueue((x) => x.distance); // priority queue (min heap) to guarantee shortest path
  const processed = {}; // decoupled memo object just for convenience
  initializeDistances();
  initializeQueue();
  bfsTraversalAndUpdateProcessedAndDistances();
  return distances;

  function initializeDistances() {
    Object.keys(graph).forEach((nodeName) => {
      distances[nodeName] = Infinity;
    });
    distances[originNodeName] = 0;
  }

  function initializeQueue() {
    q.enqueue({
      nodeName: originNodeName,
      distance: 0,
    });
  }

  function bfsTraversalAndUpdateProcessedAndDistances() {
    // Dijkstra = BFS, but edge distances can be != 1
    // (BFS can be used to find min number of edges between nodes, unweighted)
    while (q.size() > 0) {
      const A = q.dequeue().nodeName;
      if (processed[A]) {
        // ignore re-processing "from" nodes,
        // but re-process "to" nodes again (see below)
        continue;
      }
      processed[A] = true;
      graph[A].forEach((toNode) => {
        const B = toNode.nodeName;
        const edgeWeight = toNode.distance;
        const distanceFromAToB = distances[A] + edgeWeight;
        const smallestDistanceToBSoFar = distances[B];
        if (distanceFromAToB < smallestDistanceToBSoFar) {
          distances[B] = distanceFromAToB;
          q.enqueue({
            nodeName: B,
            distance: distances[B],
          });
        }
      });
    }
  }
}

// exampleUsage();

function exampleUsage() {
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

  console.log(distances);

  console.log(
    JSON.stringify(distances) === '{"A":0,"B":5,"C":7,"D":3,"E":1}'
      ? "(correct)"
      : "Something went wrong!"
  );
}

module.exports = {
  dijkstra,
};
