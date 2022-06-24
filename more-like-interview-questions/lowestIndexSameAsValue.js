/* eslint-disable no-unused-vars */

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
function lowestIndexSameAsValue_v1(array) {
  let step = Math.floor(array.length / 2);
  let i = step;
  let candidate = Infinity;
  if (array[0] === 0) return 0;
  while (step > 0 && -1 < i && i < array.length) {
    while (array[i] < i && i + step < array.length) {
      // if less than should be then all left also too low
      // so go right:
      i += step;
    }
    while (array[i] > i && -1 < i - step) {
      // if more than should be then all right also too high
      // so go left:
      i -= step;
    }
    while (array[i] === i && -1 < i - step) {
      // if equal then still check to the left just in case:
      candidate = Math.min(candidate, i);
      i -= step;
    }
    step = Math.floor(step / 2);
  }
  return candidate === Infinity ? -1 : candidate;
}

function lowestIndexSameAsValue(array) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let i = Math.floor((left + right) / 2);
    if (isTarget(array, i)) return i;
    if (array[i] < i) {
      left = i + 1;
    } else if (array[i] > i) {
      right = i - 1;
    } else if (array[i] === i) {
      // just in case it and 1 index to left are both same as value
      right = i - 1;
    }
  }
  return -1;
}

function isTarget(array, i) {
  const isValid = -1 < i && i < array.length;
  if (!isValid) return false;
  if (i === 0) return array[i] === 0;
  return array[i] === i && array[i - 1] < i - 1;
}

module.exports = {
  lowestIndexSameAsValue,
};
