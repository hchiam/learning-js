// to run this file: node queens-x8.js

// CtCI, 6th ed., ch. 8 q. 8.12

const GRID_SIZE = 8;
const results = [];

// for (let c = 0; c < 8; c++) {
//   console.log(valid([1], 1, c), `c = ${c}`);
// }
queens8(0, [], results);
const numberOfResults = results.length;

console.log(results);
console.log(
  `\nShould have 92 results. Found ${numberOfResults}. ${
    numberOfResults === 92
  }!`
);

function queens8(r, cols, res) {
  if (r === GRID_SIZE) {
    res.push(clone(cols));
  } else {
    for (let c = 0; c < GRID_SIZE; c++) {
      if (valid(cols, r, c)) {
        cols[r] = c;
        const nextRow = r + 1;
        queens8(nextRow, cols, res);
      }
    }
  }
}

function clone(cols) {
  return [...cols];
}

function valid(cols, r, c) {
  for (let rPrev = 0; rPrev < r; rPrev++) {
    const cPrev = cols[rPrev];
    const isSameCol = cPrev === c;
    if (isSameCol) return false;
    const colDist = Math.abs(c - cPrev);
    const rowDist = r - rPrev; // no need for absolute value, assuming going down rows
    const isSameDiag = colDist === rowDist;
    if (isSameDiag) return false;
  } // checked all previous rows' cells
  return true;
}
