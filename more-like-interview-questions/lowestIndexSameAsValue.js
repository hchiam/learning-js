/*
Assuming distinct sorted integers.
Idea 1: linear scan Ot(n) Os(1)
Idea 2: binary search: Ot(log n) Os(1)
  lower = go right,
  higher = go left,
  equal = check left with binary search
    (sounds like CPH's binary search)
Example/Test:
[0,2,3,4,5,6]
 .     x -> x
[-1,0,1,2,3,5]
  x  <- x - .
[0,1,2,3,4,5]
 .     . <- still need to check left
[-1,1,3,4,5,6]
    .   x ->x
*/
function lowestIndexSameAsValue(array) {
  let step = Math.floor(array.length / 2);
  let i = step;
  let candidate = Infinity;
  if (array[0] === 0) return 0;
  while (step > 0 && -1 < i && i < array.length) {
    while (array[i] < i && i + step < array.length) {
      i += step;
    }
    while (array[i] > i && -1 < i - step) {
      i -= step;
    }
    while (array[i] === i && -1 < i - step) {
      candidate = Math.min(candidate, i);
      i -= step;
    }
    step = Math.floor(step / 2);
  }
  return candidate === Infinity ? -1 : candidate;
}

module.exports = {
  lowestIndexSameAsValue,
};
