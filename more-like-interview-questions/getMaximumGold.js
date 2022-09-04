/**
 * https://leetcode.com/problems/path-with-maximum-gold/
 *
 * simply recurse on each cell, but critically
 * backtrack (set current cell to 0 and reset cell value after)
 * and
 * recurse on summing branches NOT including current cell
 * and then adding that max to the current cell
 *
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  if (!grid || grid.length === 0) return 0;
  if (grid.length === 1 && grid[0].length === 1) return grid[0][0];
  let max = 0;
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      max = Math.max(max, recurse(grid, i, j));
    });
  });
  return max;
};

function recurse(grid, i, j) {
  if (!grid[i][j]) return 0;
  const temp = grid[i][j];
  grid[i][j] = 0;
  let max = 0; // of branches, not self
  if (i > 0) max = Math.max(max, recurse(grid, i - 1, j));
  if (i < grid.length - 1) max = Math.max(max, recurse(grid, i + 1, j));
  if (j > 0) max = Math.max(max, recurse(grid, i, j - 1));
  if (j < grid[0].length - 1) max = Math.max(max, recurse(grid, i, j + 1));
  grid[i][j] = temp;
  return grid[i][j] + max; // self + max of branches
}

console.log(
  getMaximumGold([
    [0, 6, 0],
    [5, 8, 7],
    [0, 9, 0],
  ]) === 24
    ? "OK"
    : "ERROR!"
);

console.log(
  getMaximumGold([
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
  ]) === 28
    ? "OK"
    : "ERROR!"
);
