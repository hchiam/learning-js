/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/longest-increasing-subsequence/

// The solution below uses dynamic programming tabulation with Ot(n^2).
// There's a faster solution Ot(n log n) with binary search.

const lengthOfLIS = (nums) => {
  const dp = new Array(nums.length).fill(1);
  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        dp[j] = Math.max(dp[j], dp[i] + 1);
      }
    }
  }
  return Math.max(...dp, 0);
};

function solutionWrapper(numbers) {
  return lengthOfLIS(numbers);
}

module.exports = {
  solutionWrapper,
};
