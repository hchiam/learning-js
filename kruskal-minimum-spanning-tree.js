// relies on union-find data structure and path compression: https://github.com/hchiam/learning-union-find
const { SetNode } = require("./union-find-data-structure.js");

function kruskal(graph) {
  const getMinimumSpanningTree = true;
  const sortedEdges = getSortedEdges(graph, getMinimumSpanningTree);
  const spanningTree = initializeSpanningTree(graph);
  linkUpForest(sortedEdges, spanningTree);
  return spanningTree;

  function initializeSpanningTree(graph) {
    const spanningTree = {};
    Object.keys(graph).forEach((nodeName) => {
      spanningTree[nodeName] = new SetNode(nodeName);
    });
    return spanningTree;
  }

  function getSortedEdges(graph, getMinimumSpanningTree) {
    const edgesObject = [];
    Object.keys(graph).forEach((nodeName) => {
      graph[nodeName].adjacencyList.forEach((edge) => {
        const toNodeName = edge.nodeName;
        const [a, b] = [nodeName, toNodeName].sort();
        const edgeName = `${a}->${b}`;
        const distance = edge.distance;
        if (edgeName in edgesObject) {
          edgesObject[edgeName] = {
            distance: Math.min(distance, edgesObject[edgeName].distance),
          };
        } else {
          edgesObject[edgeName] = { distance: distance };
        }
      });
    });
    const edgesArray = Object.keys(edgesObject).map((edge) => {
      return {
        edgeName: edge,
        distance: edgesObject[edge].distance,
      };
    });
    return edgesArray.sort((edgeA, edgeB) => {
      const a = edgeA.distance;
      const b = edgeB.distance;
      return getMinimumSpanningTree ? a - b : b - a;
    });
  }

  function linkUpForest(edges, spanningTree) {
    edges.forEach((edge) => {
      const [A, B] = edge.edgeName.split("->");
      const groupA = spanningTree[A].getNameOfSetImIn();
      const groupB = spanningTree[B].getNameOfSetImIn();
      const areInSameGroup = groupA === groupB; // to avoid cycles
      // console.log(edge.edgeName, groupA, groupB);
      if (!areInSameGroup) {
        spanningTree[A].unionInto(spanningTree[B]);
        // const groupA_after = spanningTree[A].getNameOfSetImIn();
        // const groupB_after = spanningTree[B].getNameOfSetImIn();
        // console.log(edge.edgeName, groupA_after, groupB_after);
      }
    });
  }
}

exampleUsage();

function exampleUsage() {
  const graph = {
    // in adjacency list format:
    A: {
      group: "A",
      adjacencyList: [
        { nodeName: "B", distance: 3 },
        { nodeName: "E", distance: 5 },
      ],
    },
    B: {
      group: "B",
      adjacencyList: [
        { nodeName: "A", distance: 3 },
        { nodeName: "C", distance: 5 },
        { nodeName: "E", distance: 6 },
      ],
    },
    C: {
      group: "C",
      adjacencyList: [
        { nodeName: "B", distance: 5 },
        { nodeName: "D", distance: 9 },
        { nodeName: "F", distance: 3 },
      ],
    },
    D: {
      group: "D",
      adjacencyList: [
        { nodeName: "C", distance: 9 },
        { nodeName: "F", distance: 7 },
      ],
    },
    E: {
      group: "E",
      adjacencyList: [
        { nodeName: "A", distance: 5 },
        { nodeName: "B", distance: 6 },
        { nodeName: "F", distance: 2 },
      ],
    },
    F: {
      group: "F",
      adjacencyList: [
        { nodeName: "C", distance: 3 },
        { nodeName: "D", distance: 7 },
        { nodeName: "E", distance: 2 },
      ],
    },
  };

  const minimumSpanningTree = kruskal(graph);

  console.log(minimumSpanningTree);

  console.log(
    JSON.stringify(minimumSpanningTree) === '{"A":0,"B":5,"C":7,"D":3,"E":1}'
      ? "(correct)"
      : "Something went wrong!"
  );
}

module.exports = {
  kruskal,
};
