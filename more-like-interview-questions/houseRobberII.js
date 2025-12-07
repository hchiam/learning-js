// https://leetcode.com/problems/house-robber-ii/
// https://github.com/hchiam/learning-js/blob/main/more-like-interview-questions/houseRobber.js

/**
 * key intuition: for circular array for house robber problem:
 * just run solution twice: max of (yes first no last, no first yes last).
 **/

/**
 * @param {number[]} nums
 * @return {number}
naive: all valid combos: scan 1-n then 1+1-n+1 etc time O(n^2) space O(1)
BCR: time O(n) space O(1)
dp table? time O(n) space O(n) --> try this first
1 var? time O(n) space O(1) --> do this later if time
remember: recursive relationship --> memo --> iterative --> variables
BUT NOW CIRCULAR ARRAY! 
    --> basically can't use both start and end indices
    ideas:
        maybe start at index 1 and ignore index 0 until loop back?
            won't work with: 4411
        maybe duplicate first at end and track whether used it?
        or store a variable that indicates whether it was used? space O(n)?
        or store a variable that indicates whether it was used? space O(1)?
        or simply check if last index gave max? space O(1)?
        but need to check both, so likely still space O(n), for now?
            then time O(n) space O(n) < BCR
            try getting space O(1) later if time
    is there any case where you have to loop +2 spaces? try examples:
        010000004
            nah?
    is there any case where you have to loop +1 spaces? try examples:
        010000040
            nah?
    so all this is is restriction of first && last as 1st suspected
    also test:
      0004 = 4
      4000 = 4
      123 = 3 (not 4, not 2)
      so maybe just run twice: yes first no last, no first yes last?
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
  // return robii1(nums);
  return robii2(nums);
};

function rob1(nums) {
  // time O(n) space O(n) solution:
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
  // time O(n) space O(1) solution:
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

function robii1(nums) {
  if (nums.length < 2) return nums[0];
  return Math.max(
    rob1(nums.slice(1)), // TODO: refactor to avoid slice time O(n)
    rob1(nums.slice(0, nums.length - 1))
  );
}

function robii2(nums) {
  if (nums.length < 2) return nums[0];
  return Math.max(
    rob2(nums.slice(1)), // TODO: refactor to avoid slice time O(n)
    rob2(nums.slice(0, nums.length - 1))
  );
}

module.exports = {
  robii1,
  robii2,
};
