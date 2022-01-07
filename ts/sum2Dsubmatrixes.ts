/*
Ideas:
1) Directly store matrix Os(r c), update Ot(1), sumRegion Ot(r c), constructor Ot(r c).
2) Store a matrix of sums Os(r c), update Ot(r c), sumRegion Ot(1), constructor Ot(r c)
    with sums from (top left) to (bottom right)
        = current cell + left square + top square - top left square (to de-dupe).
    and sums from (not at top left of matrix) to (bottom right)
        = normal sum - left square - top square + top left square (to de-dupe).

How can we get a low Ot for both update and sumRegion?
What's faster than linear scans? A logarithmic scan?
And then extending that to 2D, go from Ot(n^2) down to Ot((log n)^2)?
Maybe Ot(log r log c) for both?

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

class SumMatrix {
  Matrix: number[][];
  OriginalMatrix: number[][];

  constructor(matrix: number[][]) {
    this.OriginalMatrix = [];
    this.Matrix = [];

    matrix.forEach((row) => {
      this.OriginalMatrix.push([...row]);
      this.Matrix.push([...row]);
    });

    for (let i = 0; i < this.Matrix.length; i++) {
      for (let j = 0; j < this.Matrix[0].length; j++) {
        if (i - 1 >= 0) this.Matrix[i][j] += this.Matrix[i - 1][j];
        if (j - 1 >= 0) this.Matrix[i][j] += this.Matrix[i][j - 1];
        if (i - 1 >= 0 && j - 1 >= 0)
          this.Matrix[i][j] -= this.Matrix[i - 1][j - 1]; // - !!!
      }
    }
  }

  update(row: number, col: number, val: number): void {
    const diff: number = val - this.OriginalMatrix[row][col];
    this.OriginalMatrix[row][col] = val;

    for (let i = row; i < this.Matrix.length; i++) {
      for (let j = col; j < this.Matrix[0].length; j++) {
        this.Matrix[i][j] += diff;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    let sum = this.Matrix[row2][col2];

    if (row1 === 0 && col1 === 0) {
      return sum;
    } else {
      if (row1 - 1 >= 0) sum -= this.Matrix[row1 - 1][col2];
      if (col1 - 1 >= 0) sum -= this.Matrix[row2][col1 - 1];
      if (row1 - 1 >= 0 && col1 - 1 >= 0)
        sum += this.Matrix[row1 - 1][col1 - 1]; // + !!!
    }

    return sum;
  }
}

const sm: SumMatrix = new SumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(sm.sumRegion(2, 1, 4, 3) === 8 ? "WORKED" : "error");
sm.update(3, 2, 2);
console.log(sm.sumRegion(2, 1, 4, 3) === 10 ? "WORKED" : "error");
