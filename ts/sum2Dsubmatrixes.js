/*
Ideas:
1) Directly store matrix space O(r c), update time O(1), sumRegion time O(r c), constructor time O(r c).
2) Store a matrix of sums space O(r c), update time O(r c), sumRegion time O(1), constructor time O(r c)
    with sums from (top left) to (bottom right)
        = current cell + left square + top square - top left square (to de-dupe).
    and sums from (not at top left of matrix) to (bottom right)
        = normal sum - left square - top square + top left square (to de-dupe).

How can we get a low Ot for both update and sumRegion?
What's faster than linear scans? A logarithmic scan?
And then extending that to 2D, go from time O(n^2) down to time O((log n)^2)?
Maybe time O(log r log c) for both?

3) Use a Fenwick tree, AKA a Binary Indexed Tree (a BIT)? https://en.wikipedia.org/wiki/Fenwick_tree
Watch these YouTube explanations in order:
https://youtu.be/uSFzHCZ4E-8 and then https://youtu.be/uZx-eqyu0Cg
Get the next index to sum/update with growing step sizes:
- or + 1, 2, 4, -8, etc. = - or + (i & -i)
For example, we decrement indices for the sum method, with -1, -2, -4:
  7 -= 7 & -7 -= 111 & 001 -= 001 = 7 - (1) = 6
  6 -= 6 & -6 -= 110 & 010 -= 010 = 6 - (2) = 4
  4 -= 4 & -4 -= 100 & 100 -= 100 = 4 - (4) = 0
  0 -= 0 & -0 -= 000 & 000 -= 000 = 0 - (0) = 0 (stop)

*/
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
var SumMatrix = /** @class */ (function () {
  function SumMatrix(matrix) {
    var _this = this;
    this.OriginalMatrix = [];
    this.Matrix = [];
    matrix.forEach(function (row) {
      _this.OriginalMatrix.push(__spreadArray([], row));
      _this.Matrix.push(__spreadArray([], row));
    });
    for (var i = 0; i < this.Matrix.length; i++) {
      for (var j = 0; j < this.Matrix[0].length; j++) {
        if (i - 1 >= 0) this.Matrix[i][j] += this.Matrix[i - 1][j];
        if (j - 1 >= 0) this.Matrix[i][j] += this.Matrix[i][j - 1];
        if (i - 1 >= 0 && j - 1 >= 0)
          this.Matrix[i][j] -= this.Matrix[i - 1][j - 1]; // - !!!
      }
    }
  }
  SumMatrix.prototype.update = function (row, col, val) {
    var diff = val - this.OriginalMatrix[row][col];
    this.OriginalMatrix[row][col] = val;
    for (var i = row; i < this.Matrix.length; i++) {
      for (var j = col; j < this.Matrix[0].length; j++) {
        this.Matrix[i][j] += diff;
      }
    }
  };
  SumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    var sum = this.Matrix[row2][col2];
    if (row1 === 0 && col1 === 0) {
      return sum;
    } else {
      if (row1 - 1 >= 0) sum -= this.Matrix[row1 - 1][col2];
      if (col1 - 1 >= 0) sum -= this.Matrix[row2][col1 - 1];
      if (row1 - 1 >= 0 && col1 - 1 >= 0)
        sum += this.Matrix[row1 - 1][col1 - 1]; // + !!!
    }
    return sum;
  };
  return SumMatrix;
})();
var sm = new SumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);
console.log(sm.sumRegion(2, 1, 4, 3) === 8 ? "WORKED" : "error");
sm.update(3, 2, 2);
console.log(sm.sumRegion(2, 1, 4, 3) === 10 ? "WORKED" : "error");
