function dijkstra(originNodeName, graph) {
  const distances = {}; // will return this
  const q = []; // --> TODO: as priority queue
  const processed = {}; // decoupled memo object just for convenience
  initializeDistances();
  initializeQueue();
  bfsTraversalAndUpdates();
  return distances;

  function initializeDistances() {
    Object.keys(graph).forEach((nodeName) => {
      distances[nodeName] = Infinity;
    });
    distances[originNodeName] = 0;
  }

  function initializeQueue() {
    q.push({
      nodeName: originNodeName,
      distance: 0,
    });
  }

  function bfsTraversalAndUpdates() {
    // Dijkstra = BFS, but edge distances can be != 1
    // (BFS can be used to find min number of edges between nodes, unweighted)
    while (q.length > 0) {
      const A = q.pop().nodeName;
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
        const memoizedDistanceToB = distances[B];
        if (distanceFromAToB < memoizedDistanceToB) {
          distances[B] = distanceFromAToB;
          q.push({
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
