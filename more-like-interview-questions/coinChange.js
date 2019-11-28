/* eslint-disable require-jsdoc */

// great explanation: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/discuss/77385/DP-AC-JAVA-Solution-18ms-Beating-95

const coinChange = (coins, amount) => {
  if (amount === 0) return 0;
  if ((coins.length < 1 && amount > 0) || amount < 0) return -1;
  if (coins.length === 1) {
    return (amount % coins[0] === 0) ? amount/coins[0] : -1;
  }
  coins = coins.filter((c) => c <= amount);
  coins.sort((a, b) => b - a); // biggest first
  const minCounts = new Array(amount + 1); // indices 0 to amount
  const whats = new Array(amount + 1);
  /**
   * think of using counts as a shortest-path problem,
   * but you loop kinda twice:
   * 1) go from 0 to multiples of each coin
   * 2) go from existing locations plus multiples of each coin
   * and then get the last counts position (destination) or -1 if impossible.
   */
  minCounts[0] = 0; // minimum to go nowhere is 0
  // 1) go from 0 to multiples of each coin
  for (const coin of coins) {
    let to = coin;
    let count = 1;
    while (to <= amount) {
      if (minCounts[to]) {
        minCounts[to] = Math.min(minCounts[to], count);
      } else {
        minCounts[to] = count;
      }
      if (!whats[to]) {
        whats[to] = [];
      }
      for (let i = 0; i < count; i++) {
        whats[to].push(coin);
      }
      count++;
      to = count * coin;
    }
  }
  // 2) go from existing locations plus multiples of each coin
  for (let from = 1; from < amount; from++) {
    if (minCounts[from]) {
      for (const coin of coins) {
        const to = from + coin;
        if (to > amount) continue;
        if (minCounts[to]) {
          minCounts[to] = Math.min(minCounts[to], minCounts[from] + 1);
        } else {
          minCounts[to] = minCounts[from] + 1;
        }
        if (!whats[to]) {
          whats[to] = [];
        }
        whats[to].push(coin);
      }
    }
  }
  // and then get the last counts position (destination) or -1 if impossible.
  return minCounts[amount] || -1;
};

// const a = solutionWrapper([186, 419, 83, 408], 6249);
// const a = solutionWrapper([1, 3], 11);
// console.log(a);

function solutionWrapper(coins, amount) {
  return coinChange(coins, amount);
}

module.exports = {
  solutionWrapper,
};
