/* eslint-disable require-jsdoc */

// CtCI 8.11 Coins A 362 H 300, 324 ,343, 380, 394
const makeChange = (n) => {
  const coins = [25, 10, 5, 1];
  const rec = (coins, n) => {
    let ways = 0;
    if (coins.length < 1) return;
    if (n < 1) return 1;
    // loop thru each coin denomination:
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];
      if (coin > n) continue;
      if (n % coin === 0) ways++;
      // coin can take away chunk but still have remainder:
      let remainder = n - coin;
      // try multiples of current coin denomination:
      while (remainder > 0) {
        // get the number of ways the remainder can be created:
        const otherWays = rec(coins.slice(i+1), remainder);
        if (otherWays) ways += otherWays;
        remainder -= coin;
      }
    }
    return ways;
  };
  return rec(coins, n);
};

function solutionWrapper(n) {
  return makeChange(n);
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
