/* eslint-disable require-jsdoc */

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/822/
// https://leetcode.com/explore/interview/card/top-interview-questions-medium/114/others/822/discuss/427063/Javascript-solution

/**
 * gets the sum of 2 numbers without using + or -
 */
const getSum = (a, b) => {
  let sum = a;
  let unusedCarry = b;
  while (unusedCarry) {
    const newSum = sum ^ unusedCarry;
    const newCarry = sum & unusedCarry;
    sum = newSum;
    unusedCarry = newCarry << 1;
  }
  return sum;
};

function solutionWrapper(a, b) {
  return getSum(a, b);
}

module.exports = {
  solutionWrapper,
};
