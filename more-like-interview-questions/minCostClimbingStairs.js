/* eslint-disable require-jsdoc */

const minCostClimbingStairs = function(costs) {
  // assumes length of costs is at least 2 and costs are >= 0
  const dpTable = new Array(costs.length + 1);
  // (costs.length + 1) since could jump over last index to get to the top.
  dpTable[0] = costs[0];
  dpTable[1] = costs[1];
  const outsideIndex = dpTable.length - 1;
  dpTable[outsideIndex] = 0;
  for (let i = 2; i < costs.length; i++) {
    const addOneBack = dpTable[i-1] + costs[i];
    const addTwoBack = dpTable[i-2] + costs[i];
    dpTable[i] = Math.min(addOneBack, addTwoBack);
  }
  // handle the last index (outside of costs):
  const addOneBack = dpTable[outsideIndex-1];
  const addTwoBack = dpTable[outsideIndex-2];
  dpTable[outsideIndex] = Math.min(addOneBack, addTwoBack);
  return dpTable[outsideIndex];
};

function solutionWrapper(costs) {
  return minCostClimbingStairs(costs);
}

module.exports = {
  solutionWrapper,
};
