// https://leetcode.com/problems/house-robber
// https://leetcode.com/problems/house-robber/solutions/156523/from-good-to-great-how-to-approach-most-of-dp-problems/

/**
 * @param {number[]} nums
 * @return {number}
naive: all valid combos: scan 1-n then 1+1-n+1 etc Ot(n^2) Os(1)
BCR: Ot(n) Os(1)
dp table? Ot(n) Os(n) --> try this first
1 var? Ot(n) Os(1) --> do this later if time
remember: recursive relationship --> memo --> iterative --> variables
1231
1244
 2 7 9 3 1
 2 7111112
1
1
12
12
123
124
1234
1246
AEIOU
 */
var rob = function (nums) {
  // return rob1(nums);
  return rob2(nums);
};

function rob1(nums) {
  // Ot(n) Os(n) solution:
  if (nums.length < 3) return Math.max(...nums, 0);
  const dp = new Array(nums.length + 1).fill(0);
  // choices: choose or pass = recursive relationship
  // or choices: chose previous or passed previous:
  dp[1] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // dp[i+1] because dp is off by 1
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }
  return dp[dp.length - 1];
}

function rob2(nums) {
  // Ot(n) Os(1) solution:
  if (nums.length < 3) return Math.max(...nums, 0);
  let dp2 = 0;
  let dp1 = nums[0];
  let dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(dp, dp2 + nums[i], dp1);
    dp2 = dp1;
    dp1 = dp;
  }
  return dp;
}

module.exports = {
  rob1,
  rob2,
};
