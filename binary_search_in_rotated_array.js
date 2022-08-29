/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 1) return target === nums[0] ? 0 : -1;

  const pivotIndex = getPivotIndex(nums);

  if (nums[pivotIndex] === target) return pivotIndex;

  let left = 0;
  let right = nums.length - 1;

  const isOnRight = nums[pivotIndex] <= target && target <= nums[right];
  const isOnLeft = nums[left] <= target && target <= nums[pivotIndex - 1];

  if (isOnRight) {
    left = pivotIndex + 1;
  } else if (isOnLeft) {
    right = pivotIndex - 1;
  } else {
    return -1;
  }

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

function getPivotIndex(nums) {
  const first = nums[0];
  const last = nums[nums.length - 1];
  if (first < last) return 0;

  let i = -1;
  for (let skip = nums.length; skip > 0; skip = Math.floor(skip / 2)) {
    while (i + skip < nums.length && nums[i + skip] > last) {
      i += skip;
    }
  }
  return i + 1;
}

console.log(search([5, 1, 3], 5) === 0);
console.log(search([1, 3], 0) === -1);
console.log(search([4, 5, 6, 7, 0, 1, 2], 0) === 4);
console.log(search([4, 5, 6, 7, 0, 1, 2], 3) === -1);
console.log(search([1], 0) === -1);
