/* eslint-disable require-jsdoc */

function maximumProduct(array) {
  // O(n^3):

  // let max = array[0] * array[1] * array[2];
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = i + 1; j < array.length; j++) {
  //     for (let k = j + 1; k < array.length; k++) {
  //       const temp = array[i] * array[j] * array[k];
  //       max = Math.max(max, temp);
  //     }
  //   }
  // }
  // return max;

  // O(n log n)

  const sortedAscending = [...array].sort((a, b) => a-b);
  // max 3 values:
  const [a, b, c] = sortedAscending.slice(-3);
  let max = a * b * c;
  // max 2 negative numbers:
  const negativeNumbers = sortedAscending.filter((x) => x < 0);
  let d = 0;
  let e = 0;
  if (negativeNumbers.length > 1) {
    [d, e] = negativeNumbers.slice(0, 2);
  }
  max = Math.max(max, c * d * e);
  return max;
}

module.exports = {
  maximumProduct,
};
