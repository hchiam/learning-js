// USUALLY THE WRONG SOLUTION!
// must account for 1+5 and 5+1 not counting as 2 ways!
// (or rather NOT care about order)

// treat 1+5 as a different option than 5+1:
// 11111, 15, 51
console.log(coinChange_careOrder(6, [1, 5]) === 3);

function coinChange_careOrder(target, denoms) {
  const ways = [1]; // there's one way to make 0, and 1 way to make 1
  for (let i = 1; i <= target; i++) {
    // making coins the inner loop makes it care about coin order
    for (let coin of denoms) {
      if (i - coin >= 0) {
        if (ways[i]) {
          ways[i] += ways[i - coin];
        } else {
          ways[i] = ways[i - coin];
        }
      }
    }
  }
  return ways.slice(-1)[0];
}
