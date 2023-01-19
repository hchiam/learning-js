// triplets that sum to 0: https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 naive: Ot(n^3)
 hash table: Ot(n^2) Os(n)
 3 pointers: Ot(n^2) Os(1)
 */
var threeSum = function (nums) {
  // Os(1) Ot(n^2) = Ot(n log n + n^2)
  const output = [];

  nums.sort((a, b) => a - b); // Ot(n log n) Os(1)

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) continue; // 1, +, + = 0 is impossible
    if (i > 0 && nums[i] === nums[i - 1]) continue; // avoid dupes
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        output.push([nums[i], nums[j], nums[k]]);
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++; // avoid dupes
        }
      } else if (sum < 0) {
        // sum needs to increase, decreasing k won't help:
        j++;
      } else {
        // (sum > 0) {
        // sum needs to decrease, increasing j won't help:
        k--;
      }
    }
  }

  return output;
};

module.exports = {
  threeSum,
};
