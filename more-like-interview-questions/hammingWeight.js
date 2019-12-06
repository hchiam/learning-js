/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/number-of-1-bits

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = (n) => {
  const r = (n).toString(2);
  let count = 0;
  // NOTE: this loop won't work on leetcode in js with let r = n:
  // while (r > 0) {
  //     const lastDigit = r & 1;
  //     count += (lastDigit === 1) ? 1 : 0;
  //     r = r >> 1;
  // }
  for (let i = 0; i < r.length; i++) {
    count += (r[i] === '1') ? 1 : 0;
  }
  return count;
};

// function solutionWrapper(node) {
//   return hammingWeight(node);
// }

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// module.exports = {
//   solutionWrapper,
// };

console.log(3 === hammingWeight(00000000000000000000000000001011));
console.log(1 === hammingWeight(00000000000000000000000010000000));
console.log(hammingWeight(11111111111111111111111111111101)); // 31 on leetcode
