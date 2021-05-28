// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  // assumes coins are 1 or greater and are able to be reused / in infinite supply
  const t = [];
  for (let i = 0; i < coins.length + 1; i++) t[i] = [];
  for (let i = 1; i < amount + 1; i++) t[0][i] = Infinity;
  for (let i = 1; i < coins.length + 1; i++) t[i][0] = 0;
  t[0][0] = 0;
  for (let r = 1; r < coins.length + 1; r++) {
    const coinAmount = coins[r - 1]; // 1-1 = first coin
    for (let c = 1; c < amount + 1; c++) {
      const cachedSteps = t[r - 1][c];
      const useCoinOnce =
        c - coinAmount >= 0 ? t[r - 1][c - coinAmount] + 1 : Infinity;
      const reuseCoin =
        c - coinAmount >= 0 ? t[r][c - coinAmount] + 1 : Infinity;
      t[r][c] = Math.min(cachedSteps, useCoinOnce, reuseCoin);
    }
  }

  const numberOfCoinsNeeded = t[coins.length][amount];
  return numberOfCoinsNeeded === Infinity ? -1 : numberOfCoinsNeeded;
};

function solutionWrapper(...parameters) {
  return coinChange(...parameters);
}

module.exports = {
  solutionWrapper,
};
