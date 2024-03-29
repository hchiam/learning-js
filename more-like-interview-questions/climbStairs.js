const { fibonacci_direct } = require("../fibonacci.js");

// remember: derive DP from recursion! may be easier to think backwards first
// recursive relationship --> memoize --> then try DP table iterative solution
// recursive relationship may be backwards,
// but you can build the DP table forwards while looking backwards:
function climbStairs(n) {
  if (n < 0) return 0;
  const dp = [1, 1, 2];
  let i = 3;
  while (i <= n) {
    dp[i] = dp[i - 1] + dp[i - 2]; // build forwards, look backwards
    i++;
  }
  return dp[n];
}

// but apparently going forwards works too:
function climbStairs_forwardsPassDPTable(n) {
  if (n < 0) return 0;
  const len = n + 1;
  const dp = new Array(len).fill(0);
  dp[0] = 1;
  let i = 0;
  while (i < len) {
    if (i + 1 < len) dp[i + 1] += dp[i];
    if (i + 2 < len) dp[i + 2] += dp[i];
    i++;
  }
  return dp[n];
}

function climbStairs_direct(n) {
  // start +1 earlier in Fibonacci sequence
  // because there's already 1 way for 0 steps
  /*
  fibonacci_direct(n + 1) because:
  1,1,2,3,5,8 for
  0,1,2,3,4,5 instead of for
  1,2,3,4,5,6
  */
  return fibonacci_direct(n + 1);
}

module.exports = {
  climbStairs,
  climbStairs_forwardsPassDPTable,
  climbStairs_direct,
};
