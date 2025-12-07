/**
 * [1,2,1,3,2,5] --> [3,5] are the only single items, the rest are paired.
 * Try to use bit manipulation to achieve time O(n) space O(1)
 * https://leetcode.com/problems/single-number-iii/
 *
 * Conversation that helped me understand: https://leetcode.com/problems/single-number-iii/discuss/1561852/C++-Easy-and-Clean-Solution-or-Fastest-or-All-(4+)-Methods-or-Detailed-Explanation-and-Comments/1622431
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  if (nums.length === 2) return nums;

  let xorAll = nums.reduce((all, x) => all ^ x, 0);

  let mask = 1;
  while (!(xorAll & mask)) mask = mask << 1;

  let a = 0;
  nums.forEach((num) => {
    if (num & mask) a = a ^ num;
  });

  let b = xorAll ^ a;

  return [a, b];
};

function solutionWrapper(...parameters) {
  return singleNumber(...parameters);
}

module.exports = {
  solutionWrapper,
};
