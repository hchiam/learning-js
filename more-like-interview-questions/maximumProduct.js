/* eslint-disable require-jsdoc */

function maximumProduct(array) { // O(n^3) -> O(n log n) -> O(n)
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

  // O(n log n):

  // const sortedAscending = [...array].sort((a, b) => a-b);
  // // max 3 values:
  // const [a, b, c] = sortedAscending.slice(-3);
  // let max = a * b * c;
  // // max 2 negative numbers:
  // const negativeNumbers = sortedAscending.filter((x) => x < 0);
  // let d = 0;
  // let e = 0;
  // if (negativeNumbers.length > 1) {
  //   [d, e] = negativeNumbers.slice(0, 2);
  // }
  // max = Math.max(max, c * d * e);
  // return max;

  // O(n):

  let min1 = min2 = Number.MAX_VALUE;
  let max1 = max2 = max3 = -Number.MAX_VALUE;
  for (const n of array) {
    // min1 < min2 -> "shift right":
    if (n <= min1) {
      min2 = min1;
      min1 = n;
    } else if (n <= min2) {
      min2 = n;
    }
    // max1 < max2 < max3 -> "shift left":
    if (n >= max3) {
      max1 = max2;
      max2 = max3;
      max3 = n;
    } else if (n >= max2) {
      max1 = max2;
      max2 = n;
    } else if (n >= max1) {
      max1 = n;
    }
  }
  const twoNegativesTimesPositive = min1 * min2 * max3;
  const topThreeValues = max1 * max2 * max3;
  return Math.max(twoNegativesTimesPositive, topThreeValues);
}

module.exports = {
  maximumProduct,
};
