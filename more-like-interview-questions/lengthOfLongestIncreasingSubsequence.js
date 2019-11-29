/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/longest-increasing-subsequence/

// The solution below uses dynamic programming tabulation.
// There's a faster solution O(n log n) with binary search.

const lengthOfLIS = (numbers) => { // O(n^2)
  if (numbers.length < 2) return numbers.length;
  // fill DP table: O(n)
  const dpTable = new Array(numbers.length).fill(1);
  // scan per number to get longest lengths of subsequences: O(n^2)
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const length = dpTable[i];
    for (let j = i + 1; j < numbers.length; j++) {
      const laterNumber = numbers[j];
      const laterLength = dpTable[j];
      if (number < laterNumber) {
        dpTable[j] = Math.max(length + 1, laterLength);
      }
    }
  }
  // get max length (to return): O(n)
  return Math.max(...dpTable);
};

function solutionWrapper(numbers) {
  return lengthOfLIS(numbers);
}

module.exports = {
  solutionWrapper,
};
