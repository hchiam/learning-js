// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
idea 1: left to right, fill in spaces can jump to
    DP: time O(n^2) space O(n)
BCR: time O(n) space O(1) but i doubt i can get that
idea 2: https://leetcode.com/problems/jump-game/solutions/3028797/simple-javascript-solution/
    right to left, work backwards to see if can get to the goal step by step
    time O(n) space O(1) = BCR!
 */
var canJump = function (nums) {
  // return idea1(nums);
  return idea2(nums);
};

function idea2(nums) {
  // time O(n) space O(1)

  let currentIndex = nums.length - 1;
  // work backwards from the goal
  // if currentIndex can get to 0 then return true

  for (let i = currentIndex; i >= 0; i--) {
    const maxJump = nums[i];
    if (i + maxJump >= currentIndex) currentIndex = i;
    /**
          [2,3,1,1,4]
                   c
                 c c
               c c c
             c c c c
           c c c c c
          [3,2,1,0,4]
                   c
                 x c
               x x c
             x x x c
           x x x x c
           */
  }

  return currentIndex === 0;
}

function idea1(nums) {
  // time O(n^2) space O(n)

  const dp = new Array(nums.length).fill(false);
  dp[0] = true;
  for (let i = 0; i < nums.length; i++) {
    const max = nums[i];
    for (let j = 1; j <= max; j++) {
      if (i + j < nums.length) {
        dp[i + j] = dp[i];
      }
    }
  }
  return dp[dp.length - 1];
}

module.exports = {
  idea1,
  idea2,
};
