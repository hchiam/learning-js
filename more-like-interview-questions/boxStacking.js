const input = [
  [2, 1, 2],
  [3, 2, 3],
  [2, 2, 8],
  [2, 3, 4],
  [1, 3, 1],
  [4, 4, 5],
];
const output = boxStacking(input);
console.log(output);
console.log(JSON.stringify(output) === "[[2,1,2],[3,2,3],[4,4,5]]");

/*
get stack of max height where boxes on top must be strictly smaller in all 3 dimensions

ideas:
1) brute force: all combos, and verify: Ot(n 2^n), Os(n)
2) what is the BCR? Ot(n), Os(n)
3) sort by all 3 dimensions, since they must all be in order,
and someone use DP table to find combos faster than Ot(n 2^n)?
		-> Ot(n log n + n^2) = Ot(n^2) < Ot(n 2^n), but Os(n^2)
		= Ot(n^2), Os(n^2)
4) how can we do better and do Ot(n^2) AND Os(n)?
	instead of a 2D table, just have a storage for the best height
	per box item as base, and store the last-used box that goes over it,
	and you can stack more than one box by realizing that you
	can use another box item's max height to calculate your own max.
	
	Sort in increasing order by one dimension (to "halve" the work):
	221,212,323,234,445,228
	  1   2   3   4   5   8 = max heights
		    L-->5       6=5+1 from 221
						        7=5+2 from 212
										10=5+5 from 323, 323's 5 comes from adding 212
	221,212,323,234,445,228
	 -1  -1  -1  -1  -1  -1 = index of last used instead
		    L-->1       0
						        1
										2
	 -0  -1   1  -1   2  -1 = indices as breadcrumbs
		1   2   5   4   10  8 = max heights
		following breadcrumbs from max height 10: 4, 2, 1 = 445,323,212

So the final strategy steps are:
1. sort boxes by one dimension (to save some work)
2. set up DP array for max heights
3. set up DP array for best next box index over base
4. loop through all boxes to the left of the current box
5. update height and index of valid max height increaser
6. loop once more to get max height
7. build stack by following breadcrumbs (indexOfBestNextOverBase)
*/

function boxStacking(boxes) {
  // 1. sort boxes by one dimension (to save some work)
  boxes.sort(function sortByHeight(a, b) {
    return a[2] - b[2];
  });

  // 2. set up DP array for max heights
  const maxHeights = boxes.map((d) => d[2]);

  // 3. set up DP array for best next box index over base
  const indexOfBestNextOverBase = new Array(boxes.length).fill(-1);
  // indexOfBestNextOverBase breadcrumbs let you stack > 2 items

  for (let i = 1; i < boxes.length; i++) {
    // 4. loop through all boxes to the left of the current box
    for (let j = 0; j < i; j++) {
      const over = boxes[j];
      const under = boxes[i];
      if (canStack(over, under)) {
        /*
				NOTE that it's NOT this:
				if (maxHeights[j] + maxHeights[i] > maxHeights[i]) {
				BUT rather this: (boxes[i] as base of stack) */
        if (maxHeights[j] + boxes[i][2] > maxHeights[i]) {
          const heightWithboxIAsBase = maxHeights[j] + boxes[i][2];

          // 5. update height and index of valid max height increaser
          maxHeights[i] = heightWithboxIAsBase;
          indexOfBestNextOverBase[i] = j;
        }
      }
    }
  }

  // 6. loop once more to get max height
  let indexOfMaxHeight = 0;
  for (let i = 0; i < maxHeights.length; i++) {
    if (maxHeights[i] > maxHeights[indexOfMaxHeight]) {
      indexOfMaxHeight = i;
    }
  }

  // 7. build stack by following breadcrumbs (indexOfBestNextOverBase)
  let i = indexOfMaxHeight;
  const stack = [];
  while (i > -1) {
    stack.push(boxes[i]);
    i = indexOfBestNextOverBase[i];
  }

  return stack.reverse(); // so smallest stack is listed first
}

function canStack(over, under) {
  return over[0] < under[0] && over[1] < under[1] && over[2] < under[2];
}
