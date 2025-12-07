// https://leetcode.com/problems/non-overlapping-intervals/description/

/**
 * @param {number[][]} intervals
 * @return {number}
shorthand convention: [[1,4], [1,2], [3,4]] = 14 12 34
14 12 34 -> 1
 2  1  1
12 14 34 -> 1, can't simply remove first
 1  2  1
12 13 23 34 -> 1
 1  2  1  0
1234
12
1 3
 23
  34
maybe target one with biggest number of overlaps?
maybe also sort by first (then second) to keep things predictable?
"fill in number line" won't work since e.g. 12 and 23 don't overlap?
or maybe we can, just make range end numbers exclusive
12 13 23 34: position on number line >= start && < end: 
number line of arrays: time O(max * n) space O(max * n)
1: 12, 13
2: 13, 23
3: 34
4: -
HT: time O(max * n) space O(max * n)
12: 1
13: 2
23: 1
34: 0
BCR: time O(n) space O(1) but how???
work from simple cases and build up!
12 23 -> 0
13 24 -> 1
14 23 -> 1, remove 14
19 23 34 -> 1, remove 19, especially since it covers both = ends later
  KEY INSIGHT: after going through all cases for simple example,
    remove the one that ends later, since it is always best to do.
sort to enable simple checks between neighbours
 */
var eraseOverlapIntervals = function (intervals) {
  // time O(n log n) space O(1)
  intervals.sort((a, b) => a[0] - b[0]); // time O(n log n) space O(1)
  let removed = 0;
  for (let i = 1; i < intervals.length; i++) {
    // time O(n) space O(1)
    const a = intervals[i - 1];
    const b = intervals[i];
    const haveOverlap = a[1] > b[0]; // 12 23 aren't overlapping
    if (haveOverlap) {
      removed++;
      b[1] = Math.min(a[1], b[1]);
      // for simplicity, store/overwrite in the array
    }
  }
  return removed;
};
/*
RUNNING THROUGH AN EXAMPLE TO HELP POLISH THE CODE:
removed = 1
12 13 23 34
-- 12 23 34
-- -- 23 34
-- -- -- 34
*/

module.exports = {
  eraseOverlapIntervals,
};
