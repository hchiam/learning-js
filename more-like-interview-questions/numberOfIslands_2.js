/**
 * (assumes '1' = land, '0' = water)
 * (slightly faster than the other version of this code, but destructive of the input grid)
 * @param {[[character]]} grid
 * @return {number}
 */
const numberOfIslands = (grid) => {
  if (!grid || grid.length < 1) return 0;
  // separate grid (all -1's)
  const rows = grid.length;
  const cols = grid[0].length;
  const counterGrid = grid.map(
      (row) => row.slice().map(
          (cell) => -1
      )
  );
  // initialize counter
  let counter = 0;
  // flood fill as needed
  for (let i=0; i<rows; i++) {
    for (let j=0; j<cols; j++) {
      const mapCell = grid[i][j];
      if (mapCell === '1') {
        // increment counter for (next) flood fill
        counter++;
        floodFill(i, j, grid, counter);
      } else { // mapCell === '0'
        counterGrid[i][j] = 0;
      }
    }
  }
  // return counter
  return counter;
};

const floodFill = (i, j, grid, counter) => {
  grid[i][j] = counter;
  // up
  if (i-1 >= 0 && grid[i-1][j] === '1') {
    floodFill(i-1, j, grid, counter);
  }
  // down
  if (i+1 < grid.length && grid[i+1][j] === '1') {
    floodFill(i+1, j, grid, counter);
  }
  // left
  if (j-1 >= 0 && grid[i][j-1] === '1') {
    floodFill(i, j-1, grid, counter);
  }
  // right
  if (j+1 < grid[0].length && grid[i][j+1] === '1') {
    floodFill(i, j+1, grid, counter);
  }
};
