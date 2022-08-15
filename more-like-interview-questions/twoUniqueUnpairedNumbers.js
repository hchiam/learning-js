/**
 * in linear time and constant space
 * Ot(n) Os(1)
 *
 * https://leetcode.com/problems/single-number-iii/
 *
 * https://www.geeksforgeeks.org/find-two-non-repeating-elements-in-an-array-of-repeating-elements/
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  if (!nums || nums.length < 3) return nums;

  let xor = 0;
  nums.forEach((n) => {
    xor ^= n;
  });

  const rightMost1 = xor & -xor; // can use to divide into groups

  const output = [0, 0];

  nums.forEach((n) => {
    if (n & rightMost1) {
      // 1
      output[0] ^= n;
    } else {
      output[1] ^= n;
    }
  });

  return output;
};

module.exports = {
  singleNumber,
};
