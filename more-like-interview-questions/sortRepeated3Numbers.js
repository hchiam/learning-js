/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/sort-colors
// sortColors(nums)

/**
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 * This solution is faster than O(n log n) sort & O(n) 2-pass algorithms.
 * It is able to scan the array in kinda "1" pass because of 3 pointers.
 * 2 pointers will "grow" the 0's side and the 2's side.
 */
const sortRepeated3Numbers = (numbers) => {
  let i0 = 0; // will ++ to grow 0's from left of i0
  let i2 = numbers.length - 1; // will -- to grow 2's from right of i2
  let i = 0;
  while (i <= i2 && i0 <= i2) {
    if (numbers[i] == 0) {
      // swap to move 0's to growing left
      [numbers[i], numbers[i0]] = [numbers[i0], numbers[i]];
      i0++;
      i++;
    } else if (numbers[i] == 2) {
      // swap to move 2's to growing right
      [numbers[i], numbers[i2]] = [numbers[i2], numbers[i]];
      i2--;
    } else { // numbers[i] == 1: good, carry on
      i++;
    }
  }
};

function solutionWrapper(numbers) {
  sortRepeated3Numbers(numbers);
  return numbers;
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
