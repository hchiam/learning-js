/* eslint-disable require-jsdoc */

// https://www.youtube.com/watch?v=Qf5R-uYQRPk&list=PLBZBJbE_rGRU5PrgZ9NBHJwcaZsNpf8yD&index=3

const longestCommonSubsequenceLength = (a, b) => {
  return recursion(a, b);
  // return recursionWithMemo(a, b);
  // return bottomUp(a, b);
};

function recursion(a, b, i=0, j=0) {
  if (i === a.length || j === b.length) {
    // base case: at end of either string
    return 0;
  } else if (a[i] === b[j]) {
    // add to length if match:
    return 1 + recursion(a, b, i + 1, j + 1);
  } else if (a[i] !== b[j]) { // just for clarity
    // get max length of whether advance thru a or advance thru b
    const ifAdvanceA = recursion(a, b, i + 1, j);
    const ifAdvanceB = recursion(a, b, i, j + 1);
    return Math.max(ifAdvanceA, ifAdvanceB);
  }
}

function recursionWithMemo(a, b, i=0, j=0, memo={}) {
  if (memo[a] && memo[a][b]) {
    return memo[a][b];
  }
  let output = 0;
  if (i === a.length || j === b.length) {
    // base case: at end of either string
    output = 0;
  } else if (a[i] === b[j]) {
    // add to length if match:
    output = 1 + recursionWithMemo(a, b, i + 1, j + 1);
  } else if (a[i] !== b[j]) { // just for clarity
    // get max length of whether advance thru a or advance thru b
    const ifAdvanceA = recursionWithMemo(a, b, i + 1, j);
    const ifAdvanceB = recursionWithMemo(a, b, i, j + 1);
    output = Math.max(ifAdvanceA, ifAdvanceB);
  }
  if (!memo[a]) memo[a] = {};
  memo[a][b] = output;
  return output;
}

function bottomUp(a, b) {
  const memo = [];
  // + 1 since added extra row of 0's
  for (let i = 0; i < a.length + 1; i++) {
    memo[i] = [];
    memo[i][0] = 0; // first column
    // memo[i].length = b.length + 1;
    // memo[i].fill(-1, 1);
  }
  // + 1 since added extra row of 0's
  for (let j = 0; j < b.length + 1; j++) {
    memo[0][j] = 0; // first row
  }
  // + 1 since added extra row of 0's
  for (let i = 1; i < a.length + 1; i++) {
    for (let j = 1; j < b.length + 1; j++) {
      const match = (a[i - 1] === b[j - 1]) ? 1 : 0;
      memo[i][j] = Math.max(
          match + memo[i - 1][j - 1], // add 1 more letter from previous match
          memo[i - 1][j], // use previous from a
          memo[i][j - 1], // use previous from b
      );
    }
  }
  // + 1 since added extra row:
  return memo[a.length - 1 + 1][b.length - 1 + 1];
}

function solutionWrapper(a, b) {
  return longestCommonSubsequenceLength(a, b);
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
