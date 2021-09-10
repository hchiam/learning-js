// nodemon -x 'node _test.js'

testThatItWorks();

/*

Why does this work?
Start with top-left: you still have 2 choices for increasing.
Start with top-right, 2 choices: left = decrease, down = increase.
(Same idea for bottom-left.)

How would you think of this from scratch?
Instead of somewhere the middle or right at the middle,
try an edge or corner and see if you can deduce the next spot to go to.

*/

// O(rows + columns) time, O(1) space
function searchInSorted2DMatrix(matrix, target) {
  // assuming sorted in ascending order right and down,

  // start at top right corner:
  let r = 0;
  let c = matrix[0].length - 1;

  // while valid indices:
  while (r < matrix.length && c >= 0) {
    if (matrix[r][c] < target) {
      r++; // go down = increase value (because it's sorted increasing down)
    } else if (matrix[r][c] > target) {
      c--; // go left = decrease value (because it's sorted increasing to the right)
    } else {
      return [r, c]; // found it
    }
  }
  return [-1, -1]; // didn't find it
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
