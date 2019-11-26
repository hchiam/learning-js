/* eslint-disable require-jsdoc */

function longestArithSeqLength(a) {
  // O(n^2): but apparently slower on leetcode

  let max = 0;
  const dpTable = new Map();
  for (let j = 1; j < a.length; j++) {
    for (let i = 0; i < j; i++) {
      const step = a[j] - a[i];
      // aside: avoid using objects as keys
      const prev = dpTable.get(i + ' ' + step);
      dpTable.set(j + ' ' + step, prev + 1 || 2);
      max = Math.max(max, prev + 1 || 2);
    }
  }
  return max;

  // O(n^3): but apparently faster on leetcode

  // let max = 2;
  // for (let i = 0; i < a.length; i++) {
  //   for (let j = i+1; j < a.length; j++) {
  //     const step = a[j] - a[i];
  //     let current = a[j];
  //     let length = 2;
  //     // console.log(i, j, step);
  //     for (let k = j+1; k < a.length; k++) {
  //       // console.log(i, j, k, 'current', current, 'step', step, a);
  //       if (a[k] - current === step) {
  //         length++;
  //         max = Math.max(max, length);
  //         current = a[k];
  //       }
  //     }
  //   }
  // }
  // return max;
}

function solutionWrapper(params) {
  return longestArithSeqLength(params);
}

module.exports = {
  solutionWrapper,
};
