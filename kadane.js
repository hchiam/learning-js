// Kadane's algorithm. Helpful for learning 2-pointer, sliding window, dynamic programming, and greedy algorithms.
function maxSumSubarray(arr) {
  let maxSum = arr[0];
  let currSum = 0;
  let maxL = 0;
  let maxR = 0;
  let L = 0;
  for (let R = 0; R < arr.length; R++) {
    if (currSum < 0) {
      currSum = 0;
      L = R;
    }
    currSum += arr[R];
    if (currSum > maxSum) {
      maxSum = currSum;
      maxL = L;
      maxR = R;
    }
  }
  return arr.slice(maxL, maxR + 1);
}

module.exports = {
  maxSumSubarray,
};
