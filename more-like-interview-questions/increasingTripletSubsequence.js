// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let increasingTriplet = function (nums) {
  const isInvalidInput = !nums || !Array.isArray(nums) || nums.length < 3;
  if (isInvalidInput) return false;
  // use Infinity so middle only gets assigned when mid > min and mid after min, e.g.: [2, 1, 3], mid = 3, not 2
  let min_lowestSoFar = Infinity; // can't simply use min = nums[0]
  let mid_nextLowestAboveMin = Infinity; // can't use simply mid = nums[0]
  for (let current of nums) {
    if (current <= min_lowestSoFar) {
      min_lowestSoFar = current;
    } else if (current <= mid_nextLowestAboveMin) {
      mid_nextLowestAboveMin = current;
    } else {
      return true;
    }
  }
  return false;
};

function solutionWrapper(node) {
  return increasingTriplet(node);
}

module.exports = {
  solutionWrapper,
};
