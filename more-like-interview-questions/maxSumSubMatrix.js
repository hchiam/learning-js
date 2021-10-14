console.log(
  maxSumSubMatrix(
    [
      [5, 3, -1, 5],
      [-7, 3, 7, 4],
      [12, 8, 0, 0],
      [1, -8, -8, 2],
    ],
    2
  ) === 18
);

console.log(
  maxSumSubMatrix(
    [
      [-1, -2, -3, -4, -5],
      [-5, -4, -3, -2, -1],
      [-1, -2, -3, -4, -5],
      [-5, -4, -3, -2, -1],
      [-5, -4, -3, -2, -1],
    ],
    3
  ) === -24
);

/*
ideas: (w,h,s)
1) brute force: scan the square over all possible, return max
		Ot(w h s^2) because you must re-calculate each square
		Os(1)
2) BCR Ot(w h), Os(s^2)? Ot(w h), Os(w h)?
3) try to avoid the s^2 factor in the time complexity?
	shifting window, and 
	subtract the "edge leaving", add the "edge adding"? Ot(w h s)
	Ot(w h s), Os(s^2) ≈ BCR
	complication: must go on a path, not jump to start of column:
		boustrophedon looping? but that's still some repetition
4) how can we do even better than that? Ot(w h)?
	store some cache? Os(w h)
fill in a DP table of same size as w*h:
making use of this pattern and applying it DP-style to each cell:
in 2x2 square: sum of all four = left col + top row - top-left + me
then apply that to all the other cells: (init first row/col)
 5 3	-> 5 8
-7 3    -2 4=8-2-5+3, in constant time, independent of size s!

  5  3 -1  5
 -7  4  7  4
 12  8  0  0
  1 -8 -8  2
becomes:
  5  8  7 12
 -2  4 10 19
 10 24 30 39
 11 17 15 26=15+39-30+2, in constant time, independent of size s!

How does this help us calculate faster? e.g. if size = 2:
We can now much more quickly do the 
	subtract the "edge leaving", add the "edge adding"? Ot(w h) instead!
	because the amount to subtract/add is found in constant time!
	(just subtract the pre-calc value at position-size up/left
		and account for valid indices up/left
		and add back the top-left as needed)
  sum = me - top - left + top-left
*/
function maxSumSubMatrix(matrix, size) {
  const sums = getHelperSumsMatrix(matrix);
  return getMax(sums, size);
}

function getHelperSumsMatrix(matrix) {
  const sums = new Array(matrix.length)
    .fill(null)
    .map(() => new Array(matrix[0].length).fill(0));

  sums[0][0] = matrix[0][0];

  // fill first row:
  for (let i = 1; i < matrix[0].length; i++) {
    sums[0][i] = sums[0][i - 1] + matrix[0][i];
  }

  // fill first column:
  for (let j = 1; j < matrix.length; j++) {
    sums[j][0] = sums[j - 1][0] + matrix[j][0];
  }

  for (let i = 1; i < sums.length; i++) {
    for (let j = 1; j < sums[0].length; j++) {
      sums[i][j] =
        sums[i - 1][j] +
        sums[i][j - 1] -
        sums[i - 1][j - 1] + // cancel out 1 duplicate
        matrix[i][j]; // include value of current cell
    }
  }

  return sums;
}

function getMax(sums, size) {
  let max = sums[size - 1][size - 1]; // NOT max = 0!!!

  for (let i = size - 1; i < sums.length; i++) {
    for (let j = size - 1; j < sums[0].length; j++) {
      const top = i > size - 1 ? sums[i - size][j] : 0;
      const left = j > size - 1 ? sums[i][j - size] : 0;
      const topLeft =
        i > size - 1 && j > size - 1 ? sums[i - size][j - size] : 0;
      const me = sums[i][j];
      // NOT: max = Math.max(max, top + left - topLeft + me);
      max = Math.max(max, me - top - left + topLeft);
    }
  }

  return max;
}
