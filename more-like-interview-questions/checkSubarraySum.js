/* eslint-disable require-jsdoc */

const checkSubarraySum = (nums, k) => { // O(n^2)
  if (!nums || nums.length < 2) return false;
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    for (let j = i+1; j < nums.length; j++) {
      sum += nums[j];
      if (sum === 0 || sum % k === 0) return true;
    }
  }
  return false;
};

// const checkSubarraySum = (nums, k) => { // O(n) with special math
//   if (!nums || nums.length < 2) return false;

//   const ht = {0: -1};
//   let cumulativeSum = 0;
//   let remainder = cumulativeSum;
//   for (let i = 0; i < nums.length; i++) {
//     cumulativeSum += nums[i];
//     if (k !== 0) {
//       remainder = cumulativeSum % k;
//       if (remainder in ht) {
//         // if seem remainder before,
//         // then could have items between which are multiple of k
//         if (i - ht[remainder] > 1) return true;
//       } else {
//         ht[remainder] = i;
//       }
//     } else {
//       // k == 0, so try to get values that are equal
//       // -> which means added two 0's, which works
//       if (cumulativeSum in ht) {
//         if (i - ht[cumulativeSum] > 1) return true;
//       } else {
//         ht[cumulativeSum] = i;
//       }
//     }
//   }
//   return false;
// };

function solutionWrapper(nums, k) {
  return checkSubarraySum(nums, k);
}

module.exports = {
  solutionWrapper,
};
