// nodemon -x 'node _test.js'

testThatItWorks();

// O(rows + columns) time
function searchInSorted2DMatrix(matrix, target) {
  // assuming sorted in ascending order right and down,
  // start at top right corner:
  let r = 0;
  let c = matrix[0].length - 1;
  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] < target) {
      r++;
    } else if (matrix[r][c] > target) {
      c--;
    } else {
      return [r, c];
    }
  }
  return [-1, -1];
}

function testThatItWorks() {
  console.log(
    JSON.stringify(
      searchInSorted2DMatrix(
        [
          [1, 4, 7, 12, 15, 1000],
          [2, 5, 19, 31, 32, 1001],
          [3, 8, 24, 33, 35, 1002],
          [40, 41, 42, 44, 45, 1003],
          [99, 100, 103, 106, 128, 1004],
        ],
        44
      )
    ) === "[3,3]"
  );
}
