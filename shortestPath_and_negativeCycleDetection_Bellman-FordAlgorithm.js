/**
 * Bellman-Ford algorithm:
 * - gets shortest paths from a node to all others, even if edges can have -ve (<0) values (Dijkstra can't handle that), and
 * - detects whether any negative (<0) cycles exist in the graph.
 *
 * Steps:
 * 1) Update a tracker array/HT of min path distance TO each node by checking each edge from all nodes to other nodes.
 *     - pick a starting node and set its path distance to 0.
 * 2) Do that n-1 times, because the longest path in the graph has n-1 edge weights to sum (any more and you're for sure making a cycle). This is even considering "self-edges" (node edge to itself).
 *     - --> That gives you the min path!
 *     - Also, if the tracker array/HT stops updating, you can escape early from this step (and escape early from the next step too since there's no more updates = no negative <0 cycle detected in the graph).
 * 3) Do that 1 more time (= start a cycle).
 *     - --> That tells you whether the graph has a negative <0 cycle, if anything in the tracker array/HT updates/changes.
 * @param {number[][]} adjacencyMatrix2D
 * @param {number} startIndex
 * @returns {object} {negativeCycleDetected, minDistancesTo}
 */
function shortestPath_and_negativeCycleDetection_BFA(
  adjacencyMatrix2D,
  startIndex = 0
) {
  const minDistancesTo = new Array(adjacencyMatrix2D.length).fill(Infinity);
  minDistancesTo[startIndex] = 0;

  let negativeCycleDetected = false;

  // V - 1 iterations through E edges: (return false early if early stop updates)
  const V = adjacencyMatrix2D.length; // V - 1 = longest possible path = max number of edges to sum
  for (let pathLength = 0; pathLength < V - 1; pathLength++) {
    negativeCycleDetected = bfa_relax(adjacencyMatrix2D, minDistancesTo);
    if (!negativeCycleDetected) {
      return { negativeCycleDetected, minDistancesTo };
    }
  }

  // + 1 iteration to detect -ve cycle:
  negativeCycleDetected = bfa_relax(adjacencyMatrix2D, minDistancesTo);
  return { negativeCycleDetected, minDistancesTo };
}

/**
 * Relax = one pass of minimizing paths per "to node" in the minDistancesTo tracker array/HT.
 * @param {number[][]} matrix
 * @param {number[]} minDistancesTo
 * @returns {boolean} didUpdateMinDistancesTo - whether the min path distance to any node(s) updated.
 */
function bfa_relax(matrix, minDistancesTo) {
  let didUpdateMinDistancesTo = false;

  for (let startIndex = 0; startIndex < matrix.length; startIndex++) {
    for (let endIndex = 0; endIndex < matrix[startIndex].length; endIndex++) {
      const currentMinPathPrefix = minDistancesTo[startIndex];
      const edgeToTarget = matrix[startIndex][endIndex];
      const newCandidateTotalPathDistance = currentMinPathPrefix + edgeToTarget;
      if (newCandidateTotalPathDistance < minDistancesTo[endIndex]) {
        minDistancesTo[endIndex] = newCandidateTotalPathDistance;
        didUpdateMinDistancesTo = true;
      }
    }
  }

  return didUpdateMinDistancesTo;
}

module.exports = {
  shortestPath_and_negativeCycleDetection_BFA,
};
