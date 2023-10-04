/**
 * Ot(n log n)
 */
function mergeSort(a) {
  if (a.length <= 1) return a;
  const mid = Math.floor(a.length / 2);
  const leftArray = mergeSort(a.slice(0, mid));
  const rightArray = mergeSort(a.slice(mid));
  return merge(leftArray, rightArray); // merge the reassigned sub-arrays
}

/**
 * @param {number[]} left
 * @param {number[]} right
 *
 * @return {number[]}
 **/
function merge(left, right) {
  let i = 0; // left
  let j = 0; // right
  const output = [];
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      output.push(left[i]);
      i++;
    } else {
      output.push(right[j]);
      j++;
    }
  }

  if (i < left.length) output.push(...left.slice(i));
  if (j < right.length) output.push(...right.slice(j));

  return output;
}

// function mergeSort(a) {
//   if (a.length < 2) {
//     return a;
//   } else if (a.length == 2) {
//     if (a[0] > a[1]) return [a[1], a[0]];
//     return a;
//   }
//   let len2 = Math.round(a.length / 2);
//   let L = mergeSort(a.slice(0, len2));
//   let R = mergeSort(a.slice(len2));
//   let i = 0;
//   let j = 0;
//   let output = [];
//   while (i < L.length && j < R.length) {
//     if (L[i] < R[j]) {
//       output.push(L[i]);
//       i++;
//     } else {
//       output.push(R[j]);
//       j++;
//     }
//   }
//   if (i < L.length) output = output.concat(L.slice(i));
//   if (j < R.length) output = output.concat(R.slice(j));
//   return output;
// }

// tests:
checkArraysMatch(mergeSort([3, 2, 1]), [1, 2, 3]);
checkArraysMatch(mergeSort([3, 2, 4, 1]), [1, 2, 3, 4]);
checkArraysMatch(mergeSort([5, 3, 4, 2, 1]), [1, 2, 3, 4, 5]);
checkArraysMatch(
  mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0]),
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
);

function checkArraysMatch(a, b) {
  console.log(doArraysMatch(a, b) ? "%cOK" : "%c:(", "background:red;");
}

function doArraysMatch(a, b) {
  return a.every((x, i) => a[i] === b[i]);
}
