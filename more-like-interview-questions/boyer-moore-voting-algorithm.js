/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // (assuming majority element always exists)

  if (!nums || !nums.length) return null;

  /**
   * Boyer-Moore Voting Algorithm:
   * How: Current candidate, + if =, - if !=, new candidate after 0.
   * Why: All non-majority will be canceled out with majority,
   * and won't cancel out all the majority.
   */

  let currentCandidate = null;
  let currentCount = 0;

  nums.forEach((num) => {
    if (currentCount === 0) {
      currentCandidate = num;
    }
    currentCount += num === currentCandidate ? 1 : -1;
  });

  return currentCandidate;
};

function solutionWrapper(...parameters) {
  return majorityElement(...parameters);
}

module.exports = {
  solutionWrapper,
};
