/*
Ideas:
1) Directly store matrix Os(r c), update Ot(1), sumRegion Ot(r c), constructor Ot(r c).
2) Store a matrix of sums Os(r c), update Ot(r c), sumRegion Ot(1), constructor Ot(r c)
    with sums from (top left) to (bottom right)
        = current cell + left square + top square - top left square (to de-dupe).
    and sums from (not at top left of matrix) to (bottom right)
        = normal sum - left square - top square + top left square (to de-dupe).

How can we get a low Ot for both update and sumRegion?
3) Use a Fenwick tree, AKA a Binary Indexed Tree (a BIT)? https://en.wikipedia.org/wiki/Fenwick_tree

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
