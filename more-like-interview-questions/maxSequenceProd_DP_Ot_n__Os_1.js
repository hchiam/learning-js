console.log(maxProduct([-2, -3, -4]) === 12);
console.log(maxProduct([2, 3, -2, 4]) === 6);
console.log(maxProduct([-2, 2, 3, -2, 4, -1]) === 96);

/**
 * @param {number[]} nums
 * @return {number}

DP: recursive relation: continue or not continue. Since must be contiguous, not use means start new.

Try starting at each index, so Ot(n^2), Os(n?) or Os(1?)
Can we do better?

DP: Ot(n), Os(n?)
Can we do even better?

DP: Ot(n), Os(1) is possible!
How: 3 variables! (more like 6, but still constant space.)
Track chain max to help with global max,
track chain min in case you can get a better global max,
and track global max separately from chain max since last chain may not be global max.
And always make use of the current value.

 */
function maxProduct(nums) {
  let globalMax = nums[0];
  let chainMax = 1; // not nums[0]
  let chainMin = 1; // not nums[0]

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const nTimesChainMax = n * chainMax;
    const nTimesChainMin = n * chainMin;

    chainMax = Math.max(n, nTimesChainMax, nTimesChainMin);
    chainMin = Math.min(n, nTimesChainMax, nTimesChainMin);

    globalMax = Math.max(globalMax, chainMax);
  }

  return globalMax;

  // // THE FOLLOWING WON'T WORK:
  // const dp = new Array(nums.length).fill(-Infinity);
  // let product = null;
  // for (let start = 0; start < nums.length; start++) {
  //     for (let i = start; i < nums.length; i++) {
  //         if (product === null) {
  //             product = nums[i];
  //             dp[i] = Math.max(nums[i], dp[i]);
  //         } else {
  //             const continueIt = product * nums[i];
  //             const notContinue = nums[i];
  //             if (continueIt > notContinue) {
  //                 product = continueIt;
  //                 dp[i] = Math.max(continueIt, dp[i]);
  //             } else {
  //                 // start new:
  //                 product = nums[i];
  //                 dp[i] = Math.max(nums[i], dp[i]);
  //             }
  //         }
  //     }
  //     product = null;
  // }
  // return Math.max(...dp);
}
