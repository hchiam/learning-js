/* eslint-disable no-unused-vars */

/**
 * time O(n log n) on average, but space O(n) I think
 * time O(n ^ 2) worst case if already sorted
 */
function quickSort(a) {
  if (!a.length) return a;
  const pivot = a[0];
  const left = a.slice(1).filter((x) => x <= pivot); // all guaranteed < right elems
  const right = a.slice(1).filter((x) => x > pivot); // all guaranteed > left elems
  return [...quickSort(left), pivot, ...quickSort(right)];
}

/**
 * use the "first index as pivot" approach to simplify (instead of more random)
 *
 * and this way it's also easy to know which indices to swap
 *
 * time O(n log n) space O(log n) on average, but worst case time O(n^2)
 */
function quickSort_betterSpaceMaybe(array) {
  let windowStart = 0;
  let windowEnd = array.length - 1;
  helper(array, windowStart, windowEnd);

  return array;
}

function helper(arr, windowStart, windowEnd) {
  if (windowStart >= windowEnd) return;

  // use the "first index as pivot" approach to simplify (instead of more random):
  let pivot = windowStart;
  let left = windowStart + 1;
  let right = windowEnd;

  while (left <= right) {
    const canSwapBoth = arr[left] > arr[pivot] && arr[right] < arr[pivot];
    if (canSwapBoth) {
      // if can swap both around the pivot value, then do so:
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }

    const isLeftOK = arr[left] <= arr[pivot];
    if (isLeftOK) left++;

    const isRightOK = arr[pivot] <= arr[right];
    if (isRightOK) right--;
  } // end of while loop

  /**
   * Why swap after the while loop? (btw, it's p<-->r this time, not l<-->r)
   * Because the right pointer will be on the left of the left pointer,
   * and because the pivot now can finally be placed between left and right:
   */
  [arr[pivot], arr[right]] = [arr[right], arr[pivot]];

  // now recursively call quicksort on smaller side first to optimize further:
  const leftHalfSize = right - 1 - windowStart;
  const rightHalfSize = windowEnd - (right + 1);
  const isLeftHalfSmaller = leftHalfSize < rightHalfSize;
  if (isLeftHalfSmaller) {
    helper(arr, windowStart, right - 1);
    helper(arr, right + 1, windowEnd);
  } else {
    helper(arr, right + 1, windowEnd);
    helper(arr, windowStart, right - 1);
  }
}

// function quickSort(array) {
//   let left = [];
//   let right = [];

//   let handleOneElement = array.length <= 1;
//   if (handleOneElement) {
//     return array;
//   }

//   let handleTwoElements = array.length == 2;
//   if (handleTwoElements) {
//     let outOfOrder = array[0] > array[1];
//     if (outOfOrder) {
//       return [array[1], array[0]];
//     } else {
//       return array;
//     }
//   }

//   // otherwise fill left, same, and right
//   let pivot = array[0];
//   let same = [];
//   for (let i = 0; i < array.length; i++) {
//     let e = array[i];
//     if (e < pivot) {
//       left.push(e);
//     } else if (e == pivot) {
//       same.push(e);
//     } else {
//       right.push(e);
//     }
//   }
//   left = left.concat(same);

//   // recursive call
//   let output = quickSort(left).concat(quickSort(right));

//   return output;
// }

console.log([2, 4, 1, 3]);
let sorted = quickSort([2, 4, 1, 3]);
console.log(sorted, checkIfSorted(sorted));
console.log([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
sorted = quickSort([
  1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92,
]);
console.log(sorted, checkIfSorted(sorted));
sorted = quickSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]);
console.log(sorted, checkIfSorted(sorted));

function checkIfSorted(array) {
  if (array.length < 2) return true;
  let left = 0;
  let right = 1;
  while (right < array.length) {
    if (array[left] > array[right]) return false;
    left++;
    right++;
  }
  return true;
}
