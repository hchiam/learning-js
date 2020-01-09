/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (nums.length < 1) return -1;
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    // try to break early:
    if (nums[mid] === target) return mid;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    const canCheckLeftSideAsANormalRange = (nums[left] < nums[mid]);
    if (canCheckLeftSideAsANormalRange) {
      const leftRangeHasTarget = (nums[left] < target && target < nums[mid]);
      if (leftRangeHasTarget) {
        right = mid - 1;
      } else { // otherwise try other range (right)
        left = mid + 1;
      } // always +/- 1 so we can eventually break out of left <= right
    } else { // left side contains pivot
      const targetInRightRange = (nums[mid] < target && target < nums[right]);
      if (targetInRightRange) {
        left = mid + 1;
      } else { // otherwise try other range (left)
        right = mid - 1;
      } // always +/- 1 so we can eventually break out of left <= right
    }
  }
  return -1;
};

function solutionWrapper(...parameters) {
  return search(...parameters);
}

module.exports = {
  solutionWrapper,
};
