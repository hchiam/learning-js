// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  // reference: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/discuss/1859260/Readable-JavaScript-Solution
  const smallestShip = Math.max(...weights);
  const biggestShip = weights.reduce((sum, x) => sum + x, 0);
  // but the smallest ship to ship in a # of days is somewhere in between
  // so binary search on different ship sizes and go backwards to check ship is valid
  let globalBest = Infinity;
  binarySearch(smallestShip, biggestShip);
  return globalBest;

  function binarySearch(left, right) {
    while (left <= right) {
      const mid = Math.floor(left + (right - left) / 2);

      // simulate loading ship and see if valid:
      let ships = 1;
      let load = 0;
      for (let i = 0; i < weights.length; i++) {
        const needAnotherShip = load + weights[i] > mid;
        if (needAnotherShip) {
          ships++;
          load = 0;
        }
        load += weights[i];
      }

      const isValid = ships <= days;
      if (isValid) globalBest = Math.min(globalBest, mid);

      const shouldGoRightToTryFewerShips = ships > days;
      if (shouldGoRightToTryFewerShips) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
};

module.exports = {
  shipWithinDays,
};
