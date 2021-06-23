const { fibonacci_direct } = require("../fibonacci.js");

function climbStairs(n) {
  if (n < 0) return 0;
  const memo = [1, 1, 2];
  let i = 3;
  while (i <= n) {
    memo[i] = memo[i - 1] + memo[i - 2];
    i++;
  }
  return memo[n];
}

function climbStairs_direct(n) {
  // start +1 earlier in Fibonacci sequence
  // because there's already 1 way for 0 steps
  return fibonacci_direct(n + 1);
}

module.exports = {
  climbStairs,
  climbStairs_direct,
};
