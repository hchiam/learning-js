/* eslint-disable require-jsdoc */

const longestCommonSubSequence = (a, b) => {
  const results = [];
  for (let s = 0; s < a.length; s++) {
    results[s] = '';
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
  if (results.length === 0) return '';
  return results.reduce((acc, curr) => {
    return (acc.length > curr.length) ? acc : curr;
  });
};

function solutionWrapper(a, b) {
  return longestCommonSubSequence(a, b);
}

module.exports = {
  solutionWrapper,
};
