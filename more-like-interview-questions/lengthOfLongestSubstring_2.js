/* eslint-disable require-jsdoc */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  if (!s || s.length < 1) return 0;
  if (s.length === 1) return 1;
  let headIndex = 0; // ++ or h[s[i]]+1 when same
  let maxLength = 1;
  let tempLength = 0; // = diff+1 with headIndex when same
  const ht = {}; // {letter: index}
  for (let i = 0; i < s.length; i++) { // O(s)
    if (s[i] in ht) {
      headIndex = Math.max(ht[s[i]]+1, headIndex);
      // do Math.max with headIndex in case it's before or after headIndex
      // ht[s[i]]+1 covers the case where it's also at headIndex
    }
    ht[s[i]] = i; // update if not have already, & update if already have too
    tempLength = i - headIndex + 1;
    maxLength = Math.max(maxLength, tempLength);
  }
  return maxLength;
};

function solutionWrapper(params) {
  return lengthOfLongestSubstring(params);
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
