/* eslint-disable require-jsdoc */

const uniquePaths = (m, n) => {
  // handle invalid input
  if (!m || !n) return 1;

  // set up dynamic programming tabulation
  const dpTable = new Array(n);
  for (let i = 0; i < n; i++) {
    dpTable[i] = new Array(m);
  }

  // set up first row and first column
  for (let i = 0; i < m; i++) dpTable[0][i] = 1;
  for (let i = 0; i < n; i++) dpTable[i][0] = 1;

  // fill the rest of the DP table
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dpTable[i][j] = dpTable[i-1][j] + dpTable[i][j-1];
    }
  }
  return dpTable[n-1][m-1];
};

function solutionWrapper(m, n) {
  return uniquePaths(m, n);
}

module.exports = {
  solutionWrapper,
};
