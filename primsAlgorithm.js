// https://www.youtube.com/watch?v=f7JOBJIC-NA
// Prim's Algorithm creates an MST (Minimum Spanning Tree)

const { MinHeap } = require("./minHeap.simpler");

const points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
const minCost = MinCostToConnectPoints(points);
console.log(minCost, minCost === 20 ? "OK" : "error! :(");

function MinCostToConnectPoints(points) {
  let minCost = 0;
  const adj = createAdjacencyMap(points);
  const visited = {};
  let visitedCount = 0;
  const minHeap = new MinHeap((a, b) => a[0] - b[0]);
  minHeap.add(points[0]);
  while (visitedCount < points.length) {
    const min = minHeap.pop();
    if (!min) continue;
    const [cost, node] = min;
    if (node in visited) continue;
    minCost += cost;
    visited[node] = true;
    visitedCount++;
    for (const [neighbourCost, neighbour] of adj[node]) {
      if (!(neighbour in visited)) {
        minHeap.add([neighbourCost, neighbour]);
      }
    }
  }
  return minCost;
}

function createAdjacencyMap(points) {
  const N = points.length;
  const adj = {}; // {i:[cost,node]}
  for (let i = 0; i < N; i++) {
    adj[i] = [];
  }
  for (let i = 0; i < N; i++) {
    const [x1, y1] = points[i];
    for (let j = i + 1; j < N; j++) {
      const [x2, y2] = points[j];
      const manhattanDistance = Math.abs(x1 - x2) + Math.abs(y1 - y2);
      adj[i].push([manhattanDistance, j]);
      adj[j].push([manhattanDistance, i]);
    }
  }
  return adj;
}
