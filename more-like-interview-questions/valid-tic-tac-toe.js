/**
 * Check if a given tic-tac-toe game state can occur in a valid game.
 *
 * assume:
 * - input is 2d array, always '' or 'x' or 'o' in cells
 * - only 3x3
 * - Don't assume players are trying to win (way more complex), just check for state validity.
 *
 * examples = unit tests:
 * not valid:
 * xxx
 * x
 * x
 * valid:
 * xox
 * oxo
 * oxo
 * not valid:
 * ooo
 * ooo
 * x
 * valid:
 * xxx
 * oxo
 * oox
 *
 * ideas:
 * - NOT THIS:  check if only one "line"? no - see last example above
 *    - 3) but rather this: can't have 2 "lines" of same direction
 * - 1) check if extra turns
 * - 2) can't both win
 * - any other ways to arrange cells that would be invalid?
 *    - you can place x or o anywhere
 *    - so the real restriction besides # of x/o (paired or paired+1) is arrangement
 *    - so likely done (for now, pending further testing later on)
 * - do we even need case 3? e.g., if they won 2 horizontal, it'd auto-fail 1)
 *
 * optimizations:
 * - BCR: time O(1) space O(1)
 * - idea so far: also time O(1) space O(1) if always 3x3 grid
 *
 * further work:
 * - incorporate who goes first, because can't continue playing after first player wins
 */

function isValidTicTacToeState(grid) {
  // mention I like js function hoisting so read top-down like essay
  if (unbalancedTurns(grid)) return false;
  if (won(grid, "x") && won(grid, "o")) return false;
  return true;
}

function unbalancedTurns(grid) {
  // mention filter and reduce
  let xCount = 0;
  let oCount = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "x") xCount++;
      if (grid[r][c] === "o") oCount++;
    }
  }
  const diff = Math.abs(xCount - oCount);
  return diff > 1;
}

function won(grid, who) {
  // horizontal * 3
  if (grid[0][0] === who && grid[0][1] === who && grid[0][2] === who)
    return true;
  if (grid[1][0] === who && grid[1][1] === who && grid[1][2] === who)
    return true;
  if (grid[2][0] === who && grid[2][1] === who && grid[2][2] === who)
    return true;
  // vertical * 3
  if (grid[0][0] === who && grid[1][0] === who && grid[2][0] === who)
    return true;
  if (grid[0][1] === who && grid[1][1] === who && grid[2][1] === who)
    return true;
  if (grid[0][2] === who && grid[1][2] === who && grid[2][2] === who)
    return true;
  // bl-tr
  if (grid[2][0] === who && grid[1][1] === who && grid[0][2] === who)
    return true;
  // tl-br
  if (grid[0][0] === who && grid[1][1] === who && grid[2][2] === who)
    return true;
  return false;
}

// aeiou

module.exports = {
  isValidTicTacToeState,
};
