// Ot(n), Os(1)
function minJumps(array) {
  if (!array || array.length < 2) return 0;

  let jumps = 0;

  let currentReach = 0; // MUST immediately jump from start
  let nextReach = 0; // will update as we go

  for (let i = 0; i < array.length - 1; i++) {
    const jumpSize = array[i];
    nextReach = Math.max(nextReach, i + jumpSize);

    const hitEndOfCurrentReach = i === currentReach;
    if (hitEndOfCurrentReach) {
      currentReach = nextReach; // update current reach
      jumps++; // jump into current reach

      const jumpedIntoReachContainingEnd = currentReach >= array.length - 1;
      if (jumpedIntoReachContainingEnd) {
        return jumps;
      }
    }
  }

  return jumps;
}

function solutionWrapper(costs) {
  return minJumps(costs);
}

module.exports = {
  solutionWrapper,
};
