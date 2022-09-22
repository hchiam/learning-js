test();

function test() {
  const actual1 = minimumAbsDifference([4, 2, 1, 3]);
  const expected1 = JSON.parse("[[1, 2],[2, 3],[3, 4]]");
  console.log(check(actual1, expected1));

  const actual2 = minimumAbsDifference([1, 3, 6, 10, 15]);
  const expected2 = JSON.parse("[[1, 3]]");
  console.log(check(actual2, expected2));

  const actual3 = minimumAbsDifference([3, 8, -10, 23, 19, -4, -14, 27]);
  const expected3 = JSON.parse("[[-14, -10],[19, 23],[23, 27]]");
  console.log(check(actual3, expected3));
}

function check(actual, expected) {
  return actual.every(
    (x, i) => x[0] === expected[i][0] && x[0] === expected[i][0]
  );
}

/**
 * Get an array of pairs of numbers that have min absolute difference. (Min abs diff bi-grams.)
 * https://leetcode.com/problems/minimum-absolute-difference/
 * @param {number[]} arr
 * @return {number[][]}
 */
function minimumAbsDifference(arr) {
  // idea 1: sort then get all bigrams Ot(n log n) Os(n)
  // idea 2: remap to big temp array and do a few scans Ot(n) Os(n)

  return idea1(arr);
  // return idea2(arr);
}

function idea1(arr) {
  const pairs = [];
  let minSpan = Infinity;
  arr
    .sort((a, b) => a - b)
    .forEach((x, i) => {
      if (i > 0) {
        const prev = arr[i - 1];
        const curr = arr[i];
        const span = curr - prev;
        minSpan = Math.min(minSpan, span);
      }
    });
  arr.forEach((x, i) => {
    if (i > 0) {
      const prev = arr[i - 1];
      const curr = arr[i];
      const span = curr - prev;
      if (span === minSpan) {
        pairs.push([prev, curr]);
      }
    }
  });
  return pairs;
}

function idea2(arr) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const length = max - min + 1;
  const temp = new Array(length).fill("?");
  arr.forEach((x) => {
    temp[x - min] = x;
  });
  const [minSpan, pairs] = getMinSpan(temp);
  return getSpansWithMin(pairs, minSpan);
}

function getMinSpan(temp) {
  // : [minSpan, pairs]
  let minSpan = Infinity;
  const pairs = [];
  for (let i = 0; i < temp.length; i++) {
    while (temp[i] === "?") {
      i++;
    }
    if (i < temp.length) {
      let j = i + 1;
      while (j < temp.length && temp[j] === "?") {
        j++;
      }
      if (j < temp.length) {
        const span = j - i;
        minSpan = Math.min(minSpan, span);
        pairs.push([temp[i], temp[j]]);
        i = j - 1;
      }
    }
  }
  return [minSpan, pairs];
}

function getSpansWithMin(pairs, minSpan) {
  return pairs.filter((pair) => pair[1] - pair[0] === minSpan);
}
