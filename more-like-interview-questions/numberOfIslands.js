/**
 * (assumes '1' = land, '0' = water)
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
      const counterCell = counterGrid[i][j];
      if (counterCell > -1) continue;
      const mapCell = grid[i][j];
      if (mapCell === '1') {
        // increment counter for (next) flood fill
        counter++;
        floodFill(i, j, grid, counter, counterGrid);
      } else { // mapCell === '0'
        counterGrid[i][j] = 0;
      }
    }
  }
  // return counter
  return counter;
};

const floodFill = (i, j, grid, counter, counterGrid) => {
  counterGrid[i][j] = counter;
  // up
  if (canFloodFill(i-1, j, grid, counterGrid)) {
    floodFill(i-1, j, grid, counter, counterGrid);
  }
  // down
  if (canFloodFill(i+1, j, grid, counterGrid)) {
    floodFill(i+1, j, grid, counter, counterGrid);
  }
  // left
  if (canFloodFill(i, j-1, grid, counterGrid)) {
    floodFill(i, j-1, grid, counter, counterGrid);
  }
  // right
  if (canFloodFill(i, j+1, grid, counterGrid)) {
    floodFill(i, j+1, grid, counter, counterGrid);
  }
};

const canFloodFill = (i, j, grid, counterGrid) => {
  const rows = grid.length;
  const cols = grid[0].length;
  const legalCoordinate = (i >= 0 && i < rows && j >= 0 && j < cols);
  if (!legalCoordinate) return false;
  const isIsland = (grid[i][j] === '1');
  const isVisited = (counterGrid[i][j] > -1);
  return isIsland && !isVisited;
};
