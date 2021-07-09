// https://leetcode.com/problems/maximum-length-of-repeated-subarray

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findLength(nums1, nums2) {
  const dp = initializeDPTable(nums1, nums2);
  let max = 0;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      // recurrence relation: if same, then start (1) or continue (diagonal+1)
      // (ignore top, ignore left)
      if (nums1[i] === nums2[j]) {
        dp[i + 1][j + 1] = Math.max(1, 1 + dp[i][j]);
        max = Math.max(max, dp[i + 1][j + 1]);
      }
    }
  }
  return max;
}

function initializeDPTable(a, b) {
  const dp = [];
  for (let i = 0; i < a.length + 1; i++) {
    const row = [];
    for (let j = 0; j < b.length + 1; j++) {
      row.push(0);
    }
    dp.push(row);
  }
  return dp;
}

module.exports = {
  findLength,
};
