/* eslint-disable require-jsdoc */

/**
 * @param {number[]} nums
 * @return {[number[]]}
 */
const permute = (nums) => {
  if (!nums || nums.length < 1) return [[]];

  const output = new Set();

  const recursivelyGetPermutations = (nums, combo=[]) => {
    if (nums.length === 1) { // base case / stop condition: will use up last number
      combo.push(nums[0]);
      output.add(combo);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      const newNums = nums.slice(); // avoid affecting original
      const useThis = newNums.splice(i, 1)[0];
      const isValid = (combo.indexOf(useThis) === -1); // avoid repeating same number
      if (isValid) {
        const newCombo = combo.slice(); // avoid affecting original
        newCombo.push(useThis);
        recursivelyGetPermutations(newNums, newCombo);
      }
    }
  };

  recursivelyGetPermutations(nums, []);
  return Array.from(output);
};

function solutionWrapper(params) {
  return permute(params);
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
