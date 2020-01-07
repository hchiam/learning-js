/* eslint-disable require-jsdoc */

// a dynamic programming question: https://leetcode.com/problems/new-21-game/

// flawed but helpful explanations when combined:
// https://leetcode.com/problems/new-21-game/solution/
// https://leetcode.com/problems/new-21-game/discuss/379092/A-setp-by-setp-explanation
// https://leetcode.com/problems/new-21-game/discuss/192343/Sliding-window-%2B-DP

/**
 * Key: We can get the probability of a position
 * by summing the probabilities of earlier positions.
 * (Think: paths.)
 * Let's say W = 10, and dp[x] = probability go to position x:
 * dp[0] = 1 = 100% = for sure since i <= W
 * dp[1] = 1/W since only 1 out of 10 (W)
 * dp[2] = (dp[1] * 1/W) + 1/W since can get to 2 from 1+1 or 0+2
 * dp[3] = (dp[2] * 1/W) + (dp[1] * 1/W) + 1/W since 2+1 or 1+2 or 0+3
 * dp[x] = (1/W) * ( dp[x-1] + dp[x-2] + ... + dp[x-W] ), since W paths to here
 * which can be iteratively calculated with:
 * dp[x] += dp[x] * (1/W), where dp[0] = 1 and dp[1] = 1/W
 * or simply:
 * dp[x] += dp[x] / W, where dp[0] = 1 and dp[1] = 1/W
 * ...until go beyond K,
 * and then beyond K:
 * dp[K+1] = dp[K-1] + dp[K-2] + ... + dp[K-W], since W paths to get here
 * dp[K+2] = dp[K-1] + dp[K-2] + ... + dp[K-W+1],
 * dp[K+3] = dp[K-1] + dp[K-2] + ... + dp[K-W+2],
 * (these can be easily calculated with a running sum)
 */

/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
const new21Game = (N, K, W) => {
  // assumes N, K, W are all >= 0
  // corner cases:
  if (K === 0) return 1; // already stop at K, so always <= N
  if (N === 0) return 0; // always continues until hit >= K, so never <= N
  if (N >= K+W) return 1; // all paths end up being <= N
  if (N < K) return 0; // always continues until hit >= K, so never <= N

  const dp = [];
  initializeDPTable(dp, N);
  calculateProbabilities(dp, N, K, W);
  const probability = sumChancesToGetBetweenKToN(dp, N, K);
  return Math.round(probability * 100000) / 100000;

  function initializeDPTable(dp, N) {
    dp[0] = 1; // guaranteed to start at start
    for (let i = 1; i < N + 1 + 1; i++) {
      dp[i] = 0; // otherwise not reachable until further notice
    }
  }

  function calculateProbabilities(dp, N, K, W) {
    let runningSum = 1;
    // e.g.: 1, 1/W, 1+1/W, (1+1/W)/W, ...
    for (let i = 1; i < N + 1; i++) {
      // as per above formula:
      dp[i] = runningSum / W; // W since W paths to get here
      // for under K, add new probability path:
      if (i < K) runningSum += dp[i];
      // but also limit to window of size W:
      const needToLimitToWindow = (i - W >= 0);
      if (needToLimitToWindow) runningSum -= dp[i - W];
    }
  }

  function sumChancesToGetBetweenKToN(dp, N, K) {
    let sum = 0;
    for (let i = 0; i < dp.length; i++) {
      // player stops once reach or above K
      // stop at N because want chances of stopping at <= N
      // start at K because guaranteed to be under K
      // (and at K, can't draw anymore, according to the game)
      if (i >= K && i < N + 1) {
        const probability = dp[i];
        sum += probability;
      }
    }
    return sum;
  }
};

function solutionWrapper(...parameters) {
  return new21Game(...parameters);
}

module.exports = {
  solutionWrapper,
};
