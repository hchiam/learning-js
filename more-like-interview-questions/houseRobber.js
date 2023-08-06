// https://leetcode.com/problems/house-robber

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
  if (nums.length < 3) return Math.max(...nums);
  const dp = new Array(nums.length).fill(0).map((x, i) => nums[i]);
  // choices: choose or pass = recursive relationship
  // or choices: chose previous or passed previous:
  dp[2] = Math.max(dp[0] + dp[2], dp[1]);
  for (let i = 3; i < nums.length; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1], dp[i - 2] + dp[i], dp[i - 3] + dp[i]);
  }
  console.log(dp);
  return dp[dp.length - 1];
}

function rob2(nums) {
  // Ot(n) Os(1) solution:
  let dp = Math.max(...nums);
  if (nums.length < 3) return dp;
  let dp3 = nums[0];
  let dp2 = nums[1];
  let dp1 = Math.max(dp3 + nums[2], dp2);
  let dpi = nums[3] || Math.max(0, dp1, dp2 + 0, dp3 + 0);
  for (let i = 3; i < nums.length; i++) {
    dpi = nums[i];
    dpi = Math.max(dpi, dp1, dp2 + dpi, dp3 + dpi);
    dp3 = dp2;
    dp2 = dp1;
    dp1 = dpi;
  }
  return dpi;
}

module.exports = {
  rob1,
  rob2,
};
