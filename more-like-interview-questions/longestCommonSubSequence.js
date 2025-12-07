/* eslint-disable require-jsdoc */

/**
 * based off of an interviewing.io video: https://www.youtube.com/watch?v=10WnvBk9sZc
 * time O(n m min(n,m)), space O(n m min(n,m))
 */
const longestCommonSubSequence = (a, b) => {
  const results = [];
  for (let s = 0; s < a.length; s++) {
    results[s] = "";
    let j = 0;
    for (let i = s; i < a.length; i++) {
      for (; j < b.length; j++) {
        if (a[i] === b[j]) {
          results[s] += b[j];
          i++;
        }
      }
    }
  }
  if (results.length === 0) return "";
  return results.reduce((acc, curr) => {
    return acc.length > curr.length ? acc : curr;
  });
};

/**
time O(n m), space O(n m):
Space is not as great as 2-row DP table space O(n m),
but it's faster than time O(n m min(n,m)),
by avoiding string concatenation, and
by using 2D breadcrumbs.
 */
function longestCommonSubsequence_better(str1, str2) {
  if (!str1 || !str2) return "";
  const dp = new Array(str1.length + 1).fill(null).map(() =>
    Array.from({ length: str2.length + 1 }, () => ({
      previousI: -1,
      previousJ: -1,
      character: "",
      length: 0,
    }))
  );
  for (let i = 1; i < str1.length + 1; i++) {
    for (let j = 1; j < str2.length + 1; j++) {
      const cell = dp[i][j];
      const haveSameCharacter = str1[i - 1] === str2[j - 1];
      if (haveSameCharacter) {
        cell.previousI = i - 1;
        cell.previousJ = j - 1;
        cell.character = str2[j - 1]; // since dp has extra column for ''
        cell.length = dp[i - 1][j - 1].length + 1;
      } else {
        const left = dp[i][j - 1];
        const up = dp[i - 1][j];
        const useLeft = left.length > up.length;
        cell.previousI = useLeft ? left.previousI : up.previousI;
        cell.previousJ = useLeft ? left.previousJ : up.previousJ;
        cell.character = useLeft ? left.character : up.character;
        cell.length = useLeft ? left.length : up.length;
      }
    }
  }
  const characters = getBreadcrumbs(dp);
  return characters.reverse().join("");
}

function getBreadcrumbs(dp) {
  const characters = [];
  let i = dp.length - 1;
  let j = dp[0].length - 1;
  let cell = dp[i][j];
  while (i > 0 && j > 0 && cell.character) {
    characters.push(cell.character);
    i = cell.previousI;
    j = cell.previousJ;
    cell = dp[i][j];
  }
  return characters;
}

function solutionWrapper(a, b) {
  // return longestCommonSubSequence(a, b);
  return longestCommonSubsequence_better(a, b);
}

module.exports = {
  solutionWrapper,
};
