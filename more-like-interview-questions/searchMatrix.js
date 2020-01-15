/* eslint-disable require-jsdoc, no-unused-vars */

// question: https://leetcode.com/problems/search-a-2d-matrix-ii/

// even better solution would be kinda using 2 binary searches (think of CtCI solution)

/**
 * @param {[number[]]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = (matrix, target) => { // O(m log n)
  // intuition: https://leetcode.com/problems/search-a-2d-matrix-ii/discuss/332179/Python-O(m%2Bn)-and-binary-search-O(mlgn)
  // binary search of each row
  if (!matrix || !(matrix[0])) return false;
  const numberOfRows = matrix.length;
  // start at top right cell: max of row, min of col
  for (let row = 0; row < numberOfRows; row++) {
    if (binarySearchRow(matrix[row], target)) return true;
  }
  return false;
  function binarySearchRow(row, target) {
    let left = 0;
    let right = row.length - 1;
    while (left <= right) { // <= to check one more time (< would)
      const mid = Math.floor((right - left)/2 + left);
      if (row[mid] === target) return true;
      if (row[mid] > target) {
        right = mid - 1;
      } else if (row[mid] < target) {
        left = mid + 1;
      }
    }
    return false;
  }
};

const searchMatrixMPlusN = (matrix, target) => { // O(m + n)
  // intuition: https://leetcode.com/problems/search-a-2d-matrix-ii/discuss/474939/Python-O(m%2Bn)-Solution-Explained
  // make use of fact that top right cell is max of row, min of col
  if (!matrix || !(matrix[0])) return false;
  const numberOfRows = matrix.length;
  const numberOfColumns = matrix[0].length;
  // start at top right cell: max of row, min of col
  let row = 0;
  let col = numberOfColumns - 1;
  while (row < numberOfRows && col >= 0) {
    if (matrix[row][col] === target) return true;
    if (matrix[row][col] < target) {
      row++;
    } else if (matrix[row][col] > target) {
      col--;
    }
  }
  return false;
};

const searchMatrixNaive = (matrix, target) => { // O(m * n)
  // just check all cells
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) return true;
    }
  }
  return false;
};

function solutionWrapper(...parameters) {
  return searchMatrix(...parameters);
}

module.exports = {
  solutionWrapper,
};
