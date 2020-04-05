/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/number-of-1-bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  // faster with bit trick that n & (n-1) = rightmost 1 becomes a 0
  if (n === 0) return 0;
  let count1s = 0;
  while (n !== 0) {
      n = n & (n-1);
      count1s++;
  }
  return count1s;
};

// const hammingWeight_moreReadable = (n) => {
//   return Array.from(n.toString(2)).filter(c => c === '1').length;
// };

function solutionWrapper(node) {
  return hammingWeight(node);
}

module.exports = {
  solutionWrapper,
};

// console.log(3 === hammingWeight(0b00000000000000000000000000001011));
// console.log(1 === hammingWeight(0b00000000000000000000000010000000));
// console.log(31 === hammingWeight(0b11111111111111111111111111111101));
