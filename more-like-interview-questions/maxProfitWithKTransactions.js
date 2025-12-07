/*
time O(n^2 k) space O(n k) -> time O(n k) space O(n k) -> time O(n k) space O(n)

We can get optimal solutions by combining subsolutions,
and decisions affect other decisions, so got with DP, not a greedy algorithm.

DP: 
- subsolutions/states: day, transactions used, (profit = cell value).
	(note that 1 transaction = 1 buy AND 1 sell).
- base cases: first day, 0 transactions used.
- recurrence relation: buy/sell or don't buy/sell.

naive: time O(2^min(n,k)), space O(n), since we have 2^n or 2^k choices.
DP: time O(n k), space O(n k), only 2 holding options, buy+sell = 1 transaction.
    (Actually it's time O(n^2 k), but with a running min we can avoid re-scanning.)
DP: time O(n k), space O(n), with only 2 rows.

subsolution recurrence relation:
	max(
		previous day + do nothing = pull from max(left, top)
		previous day + previous day buy + today sell if can = dp[i-...] + price[i]
	)

MAYBE THE DP TABLE WILL LOOK LIKE THIS?
i=0
k=2 = 4 rows?
h=false
 [ 5,11, 3,50,60,90]
0  0, 0, 0, 0, 0, 0
1 -5,-5,-3,-3,-3,-3
2 -5, 6, 6,47,57,87

or just do a complete buy/sell per row
to avoid getting incorrect order of transactions
and track running min buy, and track running max sell?
 or track running max profit if buy at certain day?
  (= profit up to that prev day - buying cost).

SO INSTEAD, THE DP TABLE LOOKS LIKE THIS, WITH BUYING AND SELLING BOTH HAPPENING IN EACH ROW:
i=0
k=2 
h=false
 [ 5,11, 3,50,60,90]
0  0, 0, 0, 0, 0, 0
1  0, 6, 6,47 because max -3 (+ 0 profit on that previous day)
1  0, 6, 6,47,57,87
2  0, 6, 6,53,63,93 how get this last row?

work backwards from your 2 available actions:
do nothing, or both buy/sell:
do nothing = max(previous day, previous row)
buy & sell = sell today - buy previous day + max profit up to that previous day
	why is this last formula ok?
	because guaranteed buy/sell done once at each index (when we chose to do both at each row).

and also track running max to avoid re-scanning,
so we get time O(n k) instead of time O(n^2 k).

and we can save on space by realizing we only reuse 2 rows of the DP table anyways,
so we get space O(n) instead of space O(n k).
*/

function maxProfitWithKTransactions_Ot_nk_Os_n(prices, k) {
  // time O(n k) space O(n)

  if (!prices || !prices.length || !k) return 0;

  // DP table of max subsolution profit:
  let dpPrev = new Array(prices.length).fill(0);
  let dpNow = new Array(prices.length).fill(0);
  // 0 instead of -Infinity because we always complete do 1 buy and 1 sell per row

  for (let t = 1; t < k + 1; t++) {
    let dMax = 0; // running max profit if buy a previous day
    for (let d = 1; d < prices.length; d++) {
      const doNothing = Math.max(dpNow[d - 1], dpPrev[d]);

      const sell = prices[d];
      const buy = prices[dMax];
      const runningProfit = dpPrev[dMax];
      const transact = sell - buy + runningProfit;

      dpNow[d] = Math.max(doNothing, transact);

      // update dMax after, so dMax < d strictly, never dMax = d current
      // and track -price + dp profit max at d to speed up getting dMax
      const buyingToday = -prices[d] + dpPrev[d];
      const notBuyingToday = -prices[dMax] + dpPrev[dMax];
      const doesBuyingTodayHelpProfit = buyingToday > notBuyingToday;
      dMax = doesBuyingTodayHelpProfit ? d : dMax;
    }
    [dpPrev, dpNow] = [dpNow, dpPrev];
  }

  const lastCell = dpPrev[dpPrev.length - 1]; // dpPrev because of swap
  return lastCell;
}

function maxProfitWithKTransactions_Ot_nk_Os_nk(prices, k) {
  // time O(n k) space O(n k) --> see other solution for space O(n)

  if (!prices || !prices.length || !k) return 0;

  // DP table of max subsolution profit:
  const dp = new Array(k + 1)
    .fill(null)
    .map((x) => new Array(prices.length).fill(0));
  // 0 instead of -Infinity because we always complete 1 buy and 1 sell per row

  for (let t = 1; t < k + 1; t++) {
    let dMax = 0; // running max
    for (let d = 1; d < prices.length; d++) {
      const doNothing = Math.max(dp[t][d - 1], dp[t - 1][d]);

      const sell = prices[d];
      const buy = prices[dMax];
      const runningProfit = dp[t - 1][dMax];
      const transact = sell - buy + runningProfit;

      dp[t][d] = Math.max(doNothing, transact);

      // update dMax after, so dMax < d strictly, never dMax = d current
      // and track -price + dp profit max at d to speed up getting dMax
      const buyingToday = -prices[d] + dp[t - 1][d];
      const notBuyingToday = -prices[dMax] + dp[t - 1][dMax];
      const doesBuyingTodayHelpProfit = buyingToday > notBuyingToday;
      dMax = doesBuyingTodayHelpProfit ? d : dMax;
    }
  }

  const lastCell = dp[dp.length - 1][dp[0].length - 1];
  return lastCell;
}

// THIS DIDN'T WORK:
// function maxProfitWithKTransactions(prices, k) {
// 	const memo = {};
// 	function recurse(i, k, isHolding) {
// 		const memoKey = getMemoKey(i, k, isHolding);
// 		if (memoKey in memo) return memo[memoKey];

// 		const hitBaseCase = i >= prices.length - 1 || k === 0;
// 		if (hitBaseCase) return isHolding ? prices[i] : 0; // you'd want to sell if you can

// 		const sell = (k > 0 && isHolding ? prices[i] : 0) + recurse(i+1, k-1, false);
// 		const doNothing = recurse(i+1, k, false) + recurse(i+1, k, isHolding);
// 		const buy = (k > 0 && !isHolding ? -prices[i] : 0) + recurse(i+1, k-1, true);

// 		memoKey[memoKey] = Math.max(sell, doNothing, buy);
// 		return memoKey[memoKey];
// 	}

//   return recurse(0, k, false);
// }

// function getMemoKey(i,k,isHolding) {
// 	return `${i},${k},${isHolding}`;
// }
