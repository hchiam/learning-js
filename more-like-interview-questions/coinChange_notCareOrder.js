// FIXED with respect to coinChange_careOrder.js:
// - SWAP THE 2 FOR LOOPS --> why? coin order doesn't matter!
// - set up DP table with new Array and .fill

// 1+5 = 5+1:
// 11111, 15(=51)
console.log(coinChange_notCareOrder(6, [1, 5]) === 2);

function coinChange_notCareOrder(target, denoms) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1; // there's one way to make 0, and 1 way to make 1
  // making coins the outer loop makes it not care about coin order
  for (let coin of denoms) {
    for (let i = 1; i <= target; i++) {
      if (i - coin >= 0) {
        if (dp[i]) {
          dp[i] += dp[i - coin];
        } else {
          dp[i] = dp[i - coin];
        }
      }
    }
  }
  return dp.slice(-1)[0];
}
