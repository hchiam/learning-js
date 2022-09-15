console.log(minScoreTriangulation([1, 2, 3]) === 6);
console.log(minScoreTriangulation([3, 7, 4, 5]) === 144);
console.log(minScoreTriangulation([1, 3, 1, 4, 1, 5]) === 13);

/**
 * QUESTION: https://leetcode.com/problems/minimum-score-triangulation-of-polygon/
 * HELPFUL ANSWER: https://leetcode.com/problems/minimum-score-triangulation-of-polygon/discuss/2375659/DP-Solution-in-Javascript-(Recursion-%2B-Dp-Memo-%2B-Dp-tabulation)
 * @param {number[]} values
 * @return {number}
 */
function minScoreTriangulation(values) {
  return tabulate(values);
}

// return tabulate(values);
function tabulate(values) {
  const dp = new Array(values.length)
    .fill(0)
    .map((x) => new Array(values.length).fill(0));

  for (let i = values.length - 1; i >= 0; i--) {
    // work with growing sums from the right
    for (let j = i + 2; j < values.length; j++) {
      let sum = Infinity;

      for (let point = i + 1; point < j; point++) {
        const thisTriangle = values[i] * values[point] * values[j];
        const leftSum = dp[i][point];
        const rightSum = dp[point][j];
        sum = Math.min(sum, thisTriangle + leftSum + rightSum);
      }

      dp[i][j] = sum;
    }
  }

  return dp[0][values.length - 1];
}

// const dp = new Array(values.length).fill(-1).map(x => new Array(values.length).fill(-1));
// return memoize(values, 0, values.length - 1, dp);
function memoize(values, i, j, dp) {
  const cannotMakeTriangle = i + 1 === j || i === j;
  if (cannotMakeTriangle) return 0;

  if (dp[i][j] !== -1) return dp[i][j];

  let sum = Infinity;

  for (let point = i + 1; point < j; point++) {
    const thisTriangle = values[i] * values[point] * values[j];
    const leftSum = memoize(values, i, point, dp); // assume done
    const rightSum = memoize(values, point, j, dp); // assume done
    sum = Math.min(sum, thisTriangle + leftSum + rightSum);
  }

  dp[i][j] = sum;

  return sum;
}

// return recurse(values, 0, values.length - 1);
function recurse(values, i, j) {
  const cannotMakeTriangle = i + 1 === j || i === j;
  if (cannotMakeTriangle) return 0;

  let sum = Infinity;

  for (let point = i + 1; point < j; point++) {
    const thisTriangle = values[i] * values[point] * values[j];
    const leftSum = recurse(values, i, point); // assume done
    const rightSum = recurse(values, point, j); // assume done
    sum = Math.min(sum, thisTriangle + leftSum + rightSum);
  }

  return sum;
}

/*
3 -> 1 1 1
4 -> 1 1 2 2
5 -> 1 1 2 2 3
6 -> 1 1 1 3 3 3 (besides 1 1 2 2 3 3 or 1 1 2 2 2 4)
7 -> 1 1 1 2 3 3 4 (and others?)
8 -> 1 1 1 1 3 3 4 4
hard to find number pattern?

maybe it's like a DP problem? decide whether to start a triangle or not?

but will the more complex connections ever do better than naive clockwise "skips" around the perimeter? when you hit 7 sides, you CAN'T naively do clockwise "skips"

how do you even generate a candidate solution?

start recursively? (before try memoizing before try DP-table-ing)
1 triangle -> move that 1 triangle around, solve the left and right sides recursively

then memoize that by simply storing previous answers with 2 keys: i and j

then DP-table that by turning the 2 keys into proper 2D table indices
*/
