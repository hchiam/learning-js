/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
  if (nums.length < 1) return 0;
  if (nums.length === 1) {
    return (nums[0] === val) ? 0 : 1;
  }
  let left = 0; // "replace at"
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let output = removeElement(nums, val);
console.log(output === 5, output, 'should be ' + 5);
console.log(nums);

nums = [3, 2, 2, 3];
val = 3;
output = removeElement(nums, val);
console.log(output === 2, output, 'should be ' + 2);
console.log(nums);

nums = [3, 3];
val = 5;
output = removeElement(nums, val);
console.log(output === 2, output, 'should be ' + 2);
console.log(nums);

nums = [3, 3, 3, 3];
val = 5;
output = removeElement(nums, val);
console.log(output === 4, output, 'should be ' + 4);
console.log(nums);

function solutionWrapper(...parameters) {
  return solution(...parameters);
}

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
