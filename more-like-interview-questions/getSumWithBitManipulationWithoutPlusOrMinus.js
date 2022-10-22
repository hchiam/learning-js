/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/sum-of-two-integers
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/822/
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/822/discuss/427063/Javascript-solution

/**
 * gets the sum of 2 numbers without using + or -
 * so use BIT MANIPULATION instead!
 * kudos to https://leetcode.com/problems/sum-of-two-integers/discuss/132479/Simple-explanation-on-how-to-arrive-at-the-solution
 *
 *  011 = a
 * +010 = b
 * =001 = a ^ b
 * +100 = (a & b) << 1
 * =101 = (a^b) | ((a&b)<<1), but you can't always do this because a carry can "bubble"
 */
const getSum = (a, b) => {
  // must loop and track carry just in case of "bubbling"
  // use b to track latest carry
  let sum = a; // will "add" b to a to get sum output
  let unresolved = b; // use b to set up tracking latest unresolved carry
  while (unresolved) {
    const carry = (sum & unresolved) << 1; // (a & b) << 1 from earlier
    sum = sum ^ unresolved; // a ^ b from earlier
    unresolved = carry;
  }
  return sum;
};

function solutionWrapper(a, b) {
  return getSum(a, b);
}

module.exports = {
  solutionWrapper,
};
