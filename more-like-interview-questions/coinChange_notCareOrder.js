// FIXED with respect to coinChange_careOrder.js:
// - SWAP THE 2 FOR LOOPS --> why? coin order doesn't matter!
// - DP table = new Array and .fill because = [] can have NaNs in the middle

// 1+5 = 5+1:
// 11111, 15(=51)
console.log(coinChange_notCareOrder(6, [1, 5]) === 2);

// 223, 34, 7
console.log(coinChange_notCareOrder(7, [2, 3, 4, 7]) === 3);

function coinChange_notCareOrder(target, denoms) {
  // const ways = [];
  const ways = new Array(target + 1).fill(0);
  ways[0] = 1; // there's one way to make 0, and 1 way to make 1
  // making coins the outer loop makes it not care about coin order
  for (let coin of denoms) {
    for (let i = 1; i <= target; i++) {
      if (i - coin >= 0) {
        // ways[i] = (ways[i] || 0) + (ways[i - coin] || 0);
        ways[i] += ways[i - coin];
      }
    }
  }
  // return ways.slice(-1)[0];
  return ways[target];
}
