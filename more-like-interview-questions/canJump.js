/* eslint-disable require-jsdoc */

/**
 * (even simpler solution)
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = (nums) => {
  if (nums.length < 2) return true;
  let stepsNeeded = 1;
  // check starting one index before the end:
  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < stepsNeeded) {
      stepsNeeded++;
    } else {
      stepsNeeded = 1;
    }
  }
  return (nums[0] >= stepsNeeded);
};

// eslint-disable-next-line no-unused-vars
const canJumpDirectlyDP = (numbers = []) => { // T: O(n v); S: O(n)
  if (numbers.length < 2) return true;
  if (numbers[0] === 0) return false;
  const dp = new Array(numbers.length);
  dp[0] = true;
  // go left to right, filling in what can be reached from each number
  for (let i = 0; i < numbers.length; i++) {
    if (dp[i] !== true) return false;
    for (let v = 1; v <= numbers[i] && i + v < numbers.length; v++) {
      dp[i + v] = true;
    }
  }
  return dp[dp.length - 1] === true;
};

// eslint-disable-next-line no-unused-vars
const canJumpGreedySolution = (numbers = []) => { // T: O(n); S: O(1)
  if (numbers.length < 2) return true;
  if (numbers[0] === 0) return false;
  // observation: can jump from any number > 0 to another adjacent one
  let iTo = numbers.length-1; // end
  // go right to left, start trying to get to destination from 1 left
  for (let iFrom = numbers.length-2; iFrom>=0; iFrom--) {
    if (iFrom + numbers[iFrom] >= iTo) {
      iTo = iFrom; // update where you can get to
    }
  }
  return iTo === 0; // whether hit start
};

function solutionWrapper(...parameters) {
  return canJump(...parameters);
}

module.exports = {
  solutionWrapper,
};
