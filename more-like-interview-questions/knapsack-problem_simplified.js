const testOutput = knapsackProblem(
  [
    [1, 2],
    [4, 3],
    [5, 6],
    [6, 7],
  ],
  10
);

console.log(
  JSON.stringify(testOutput) === JSON.stringify([10, [3, 1]]),
  testOutput
);

/*
ideas:
1) generate each combo and check if it's valid: Ot(n 2^n)
2) DP table: w possible weights (0-capacity) vs n items: Ot(w n)
	but to get the items used, need to keep the entire DP table:
	at each cell, simply store the values (diagonal if used else above-cell value).

To simplify the DP table: just store max values,
	and you can still figure out which items were used,
	and/because you can simplify the recursive choices to 2 options:
	use / not use the current item (fromAbove xor diagonal).
*/

function knapsackProblem(items, capacity) {
  const dp = new Array(items.length + 1) // +1 to have row for "use none"
    .fill(null)
    .map(() => new Array(capacity + 1).fill(0)); // +1 to have col for capacity too

  for (let i = 1; i < dp.length; i++) {
    for (let w = 1; w < dp[0].length; w++) {
      const item = items[i - 1]; // -1 since first row is "use none"
      const [itemValue, itemWeight] = item;
      const useItDiagonal =
        w >= itemWeight ? itemValue + dp[i - 1][w - itemWeight] : 0;
      const dontUseItButCopyAbove = dp[i - 1][w];
      dp[i][w] = Math.max(useItDiagonal, dontUseItButCopyAbove);
    }
  }

  const { total, usedIndices } = followBreadcrumbs(dp, items);
  return [total, usedIndices];
}

/**
key insight: there were only 2 choices,
so we could've just stored the max values in the DP table
*/
function followBreadcrumbs(dp, items) {
  let total = 0;
  let usedIndices = []; // e.g. used item indices [0, 1, 2, ...]

  let i = dp.length - 1;
  let w = dp[0].length - 1;

  // there were only 2 choices: fromAbove or diagonal:
  while (dp[i][w] > 0) {
    const simplyCopiedFromPreviousMax = dp[i - 1][w] === dp[i][w];
    if (simplyCopiedFromPreviousMax) {
      i--;
    } else {
      const [itemValue, itemWeight] = items[i - 1]; // -1 because first row is "use none"
      const itemIndex = i - 1;

      total += itemValue;
      usedIndices.push(itemIndex);

      i--;
      w = Math.max(0, w - itemWeight);
    }
  }

  return { total, usedIndices };
}
