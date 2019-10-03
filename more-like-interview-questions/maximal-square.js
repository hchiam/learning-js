// https://leetcode.com/problems/maximal-square/submissions/

/* eslint-disable require-jsdoc */

/**
 * @param {(character[])[]} matrix
 * @return {number}
 */

// THIS ONE IS THE APPARENTLY "BETTER" SOLUTION: IT USES DYNAMIC PROGRAMMING:
// https://leetcode.com/problems/maximal-square/solution/
const maximalSquare = function(matrix) {
  // empty array or array of empty array
  if (!matrix.length || !matrix[0].length) {
    return 0;
  }
  const memo = matrix.slice(); // clone matrix into a "memo matrix"
  let max = Math.max(...matrix[0]); // check 1st row for any 1
  for (let i = 0; i < matrix.length; i++) {
    max = Math.max(matrix[i][0], max); // check 1st column for any 1
  } // now max is 1 if any cell in 1st row / 1st column has 1
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] == '0') {
        continue;
      }
      // otherwise
      const minOfPrev = Math.min(memo[i-1][j], memo[i][j-1], memo[i-1][j-1]);
      memo[i][j] = minOfPrev + 1; // +1 since this cell is '1'
      if (memo[i][j] > max) {
        max = memo[i][j];
      }
    }
  }
  return max ** 2; // sides^2 = cells in square
};

// Brute force solution. Note "better" solutions in: https://leetcode.com/problems/maximal-square/solution/
// eslint-disable-next-line no-unused-vars
const maximalSquareBruteForce = function(matrix) {
  let maxCount = 0;
  for (let i=0; i<matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      maxCount = Math.max(maxCount, tryToGrow(matrix, i, j));
    }
  }
  return maxCount;
};

const tryToGrow =(matrix, i, j)=> {
  let count = 0;
  const lenI = matrix.length;
  const lenJ = matrix[0].length;
  if (matrix[i][j] == '0') {
    return 0;
  } else {
    count = 1;
  }
  let colOK = true;
  let rowOK = true;
  for (let layer=1; i+layer<lenI && j+layer<lenJ && colOK && rowOK; layer++) {
    let tempCount = 0;
    // check column to right
    colOK = true;
    for (let row=i; row<=i+layer && colOK; row++) {
      if (matrix[row][j+layer] == '0') {
        colOK = false;
      } else {
        tempCount++;
      }
    }
    // check row to bottom
    rowOK = true;
    for (let col=j; col<=j+layer && rowOK; col++) {
      if (matrix[i+layer][col] == '0') {
        rowOK = false;
      } else {
        tempCount++;
      }
    }
    if (colOK && rowOK && isSquare(count + tempCount - 1)) {
      count += tempCount - 1;
    } else {
      break;
    }
  }
  return count;
};

const isSquare =(n)=> {
  return Math.sqrt(n) % 1 == 0; // sqrt is whole number
};

console.log(0 == maximalSquare([[]]));
console.log(4 == maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]));
console.log(1 == maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '0', '1'],
  ['1', '0', '0', '1', '0'],
]));
console.log(0 == maximalSquare([['0']]));
console.log(1 == maximalSquare([['1']]));
console.log(1 == maximalSquare([
  ['1', '0'],
  ['1', '0'],
]));
console.log(1 == maximalSquare([
  ['1', '0'],
  ['0', '1'],
]));
console.log(1 == maximalSquare([
  ['1', '0'],
  ['1', '1'],
]));
console.log(0 == maximalSquare([
  ['0', '0'],
  ['0', '0'],
]));
console.log(4 == maximalSquare([
  ['1', '1'],
  ['1', '1'],
]));
console.log(9 == maximalSquare([
  ['1', '1', '1'],
  ['1', '1', '1'],
  ['1', '1', '1'],
]));
console.log(1 == maximalSquare([
  ['1', '1', '1'],
  ['1', '0', '1'],
  ['1', '1', '1'],
]));
console.log(1 == maximalSquare([
  ['0', '1', '1'],
  ['1', '0', '1'],
  ['1', '1', '1'],
]));
console.log(1 == maximalSquare([
  ['0', '0', '0'],
  ['0', '1', '0'],
  ['0', '0', '0'],
]));
console.log(4 == maximalSquare([
  ['0', '1', '1'],
  ['0', '1', '1'],
  ['0', '0', '0'],
]));
console.log(4 == maximalSquare([
  ['0', '1', '1'],
  ['1', '1', '1'],
  ['1', '1', '0'],
]));
console.log(1 == maximalSquare([
  ['0', '0', '0', '1', '0', '1', '1', '1'],
  ['0', '1', '1', '0', '0', '1', '0', '1'],
  ['1', '0', '1', '1', '1', '1', '0', '1'],
  ['0', '0', '0', '1', '0', '0', '0', '0'],
  ['0', '0', '1', '0', '0', '0', '1', '0'],
  ['1', '1', '1', '0', '0', '1', '1', '1'],
  ['1', '0', '0', '1', '1', '0', '0', '1'],
  ['0', '1', '0', '0', '1', '1', '0', '0'],
  ['1', '0', '0', '1', '0', '0', '0', '0'],
]));

/**
 * THE FOLLOWING ARE TIPS FROM https://www.youtube.com/watch?v=dIrS31CCITM
 *
 * create classes in js for bonus points in interviews
 *
 * do leetcode easy and medium (not hard)
 * because interviewers want quantity of questions to evaluate
 *
 * aim for being faster than at least 50%-60% of submitted solutions
 */
