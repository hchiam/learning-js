// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  // O(n^2)
  let memo = [1, 0];
  for (let times = 0; times < rowIndex; times++) {
    const currentLength = memo.length;
    const temp = [...memo];
    for (let i = 1; i <= currentLength; i++) {
      memo[i] = temp[i - 1] + (temp[i] ? temp[i] : 0);
    }
  }
  return memo.slice(0, memo.length - 1);
};

/*
10
110
1210
13310
14641
*/

module.exports = {
  getRow,
};
