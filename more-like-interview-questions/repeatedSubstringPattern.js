// https://leetcode.com/problems/repeated-substring-pattern/

/* eslint-disable require-jsdoc */

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = (s) => {
  if (s.length < 2) return false;
  if (new Set(s).size === 1) return true;
  // try different lengths (<=/2: if 7 -> stop at && use 3; else invalid index)
  for (let length = 2; length <= Math.floor(s.length / 2); length++) {
    if (s.length % length !== 0) continue;
    const firstSlice = s.slice(0, length);
    let foundLengthThatWorks = true;
    // <= length because using slice
    for (let i = length; i + length <= s.length; i += length) {
      if (s.slice(i, i + length) !== firstSlice) {
        foundLengthThatWorks = false;
        break; // try another length
      }
    }
    if (foundLengthThatWorks) return true;
  }
  // otherwise found no length that works
  return false;
};

function solutionWrapper(params) {
  return repeatedSubstringPattern(params);
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
