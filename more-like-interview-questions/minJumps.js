/**
 * Ot(n), Os(1) = BCR!
 * Key insight for most optimal (BCR) solution:
 * 		Update the next max reach, while checking whether you need to jump yet.
 * 		i.e. current max reach = previous max reach where you only add +1 jump,
 * 		and get next range by updating max reach from all in the current range.
 */
function minJumps(array) {
  if (!array || array.length < 2) return 0;

  let jumps = 0;

  let currentReach = 0; // MUST immediately jump from start
  let nextReach = 0; // will update as we go

  // for (let i = 0; i < array.length - 1; i++) {
  for (let i in array) {
    i = Number(i);
    const jumpSize = array[i];
    nextReach = Math.max(nextReach, i + jumpSize);

    const hitEndOfCurrentReach = i === currentReach;
    if (hitEndOfCurrentReach) {
      currentReach = nextReach; // update current reach
      jumps++; // jump into current reach
      const lastIndex = array.length - 1;
      const jumpedIntoReachContainingEnd = currentReach >= lastIndex;
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
