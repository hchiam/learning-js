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
1) generate each combo and check if it's valid: time O(n 2^n)
2) DP table: w possible weights (0-capacity) vs n items: time O(w n)
	but to get the items used, need to keep the entire DP table:
	at each cell: store cell came from + what was used to get to cell.

TODO: simplify the DP table: just store max values,
	and you can still figure out which items were used,
	and/because you can simplify the recursive choices to 2 options:
	use / not use the current item (fromAbove xor diagonal).
*/

function knapsackProblem(items, capacity) {
  const dp = new Array(items.length + 1)
    .fill(null) // +1 to have row for "use none"
    .map(() =>
      Array.from({ length: capacity + 1 }, () => ({
        // +1 to have col for capacity too
        from: { i: -1, w: -1 }, // where came from to get here
        usedItemIndex: -1, // index out of items
        value: 0,
      }))
    );

  for (let i = 1; i < dp.length; i++) {
    for (let w = 1; w < dp[0].length; w++) {
      // maxHelper gets data of max of diagonal/fromAbove/fromLeft:
      const { from, usedItemIndex, value } = maxHelper(dp, i, w, items);

      const cell = dp[i][w];
      cell.from = from;
      cell.usedItemIndex = usedItemIndex;
      cell.value = value;
    }
  }

  const { total, usedIndices } = followBreadcrumbs(dp, items);
  return [total, usedIndices];
}

function maxHelper(dp, i, w, items) {
  const item = items[i - 1]; // -1 since first row is "use none"
  const [itemValue, itemWeight] = item;

  const diagonal =
    w >= itemWeight ? itemValue + dp[i - 1][w - itemWeight].value : 0;
  const fromAbove = dp[i - 1][w].value;
  const fromLeft = dp[i][w - 1].value;

  // outputs:
  const from = { i: -1, w: -1 };
  let usedItemIndex = -1;
  let value = 0;

  if (diagonal >= fromAbove && diagonal >= fromLeft) {
    from.i = i - 1;
    from.w = w - itemWeight;
    usedItemIndex = i - 1;
    value = diagonal;
  } else if (fromAbove >= diagonal && fromAbove >= fromLeft) {
    from.i = i - 1;
    from.w = w;
    usedItemIndex = i - 1 - 1;
    value = fromAbove;
  } else {
    // } else if (fromLeft >= diagonal && fromLeft >= fromAbove) {
    from.i = i;
    from.w = w - 1;
    usedItemIndex = i - 1;
    value = fromLeft;
  }
  return {
    from,
    usedItemIndex,
    value,
  };
}

function followBreadcrumbs(dp, items) {
  let total = 0;
  let usedIndices = []; // e.g. used item indices [0, 1, 2, ...]

  let i = dp.length - 1;
  let w = dp[0].length - 1;

  while (dp[i][w].value > 0) {
    const cell = dp[i][w];

    // const wasFromLeft = cell.from.i === i;
    // const wasFromAbove = cell.from.i === i - 1 && cell.from.w === w;
    const wasFromDiagonal = cell.from.i === i - 1 && cell.from.w < w;
    if (wasFromDiagonal) {
      total += items[cell.usedItemIndex][0];
      usedIndices.push(cell.usedItemIndex);
    }

    // to get next cell to check:
    i = cell.from.i;
    w = cell.from.w;
  }

  return { total, usedIndices };
}
