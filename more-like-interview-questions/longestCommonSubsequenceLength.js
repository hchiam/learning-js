/* eslint-disable require-jsdoc */

// https://www.youtube.com/watch?v=Qf5R-uYQRPk&list=PLBZBJbE_rGRU5PrgZ9NBHJwcaZsNpf8yD&index=3

const longestCommonSubsequenceLength = (a, b) => {
  // return recursion(a, b);
  // return recursionWithMemo(a, b);
  // return bottomUp(a, b);
  return bottomUp_WithSmallerSpace(a, b);
};

function recursion(a, b, i = 0, j = 0) {
  if (i === a.length || j === b.length) {
    // base case: at end of either string
    return 0;
  } else if (a[i] === b[j]) {
    // add to length if match:
    return 1 + recursion(a, b, i + 1, j + 1);
  } else if (a[i] !== b[j]) {
    // just for clarity
    // get max length of whether advance thru a or advance thru b
    const ifAdvanceA = recursion(a, b, i + 1, j);
    const ifAdvanceB = recursion(a, b, i, j + 1);
    return Math.max(ifAdvanceA, ifAdvanceB);
  }
}

function recursionWithMemo(a, b, i = 0, j = 0, memo = {}) {
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
  } else if (a[i] !== b[j]) {
    // just for clarity
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
      const match = a[i - 1] === b[j - 1] ? 1 : 0;
      memo[i][j] = Math.max(
        match + memo[i - 1][j - 1], // add 1 more letter from previous match
        memo[i - 1][j], // use previous from a
        memo[i][j - 1] // use previous from b
      );
    }
  }
  // + 1 since added extra row:
  return memo[a.length - 1 + 1][b.length - 1 + 1];
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}

https://leetcode.com/problems/longest-common-subsequence

DP: states, bases, relation:
states: index in text1, index in text2
bases: '' and '': nothing matches '', so 0 for top row and left-most column
relation: max(doing nothing, using character in text1, using character in text2)

memo-ize it in a DP table

  ace
 0000
a0111
b0111
c0122
d0122
e0123

time O(n m) space O(n m)

but how might we do better?

save space in the DP table: we only need 2 rows, so space O(min(n,m))

 */
function bottomUp_WithSmallerSpace(text1, text2) {
  // states of indices in both texts:
  let dp0 = new Array(text2.length + 1).fill(0);
  let dp1 = new Array(text2.length + 1).fill(0);
  // base cases of 0 for ''s, but need to adjust all indices + 1

  const text1Array = Array.from(text1);
  const text2Array = Array.from(text2);

  text1Array.forEach((t1, i) => {
    text2Array.forEach((t2, j) => {
      // recurrence relation:

      const top = dp0[j + 1];
      const left = dp1[j - 1 + 1];
      const doNothing = Math.max(top, left); // Why not dp0[j-1+1]? it's unnecessary, since vertical/horizontal automatically = diagonal

      const useIfCan = t1 === t2 ? dp0[j - 1 + 1] + 1 : 0;
      /*
          Why NOT doNothing + 1? you'd be incorrectly double-counting a match.
          Like if one string has 2 b's but the other string only has 1 b:
          
          If we did useIfCan = t1 === t2 ? doNothing + 1 : 0;
          
            jmjkbkjkv
           0000000000
          b0000011111
          s0000011111
          b000002!!!wrong! only 1 b exists
          i0
          n0
          i0
          n0
          m0
          */

      dp1[j + 1] = Math.max(doNothing, useIfCan);
    });

    [dp0, dp1] = [dp1, dp0];
  });

  const lastCell = dp0[dp0.length - 1]; // not dp1 because of the last swap
  return lastCell;
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
