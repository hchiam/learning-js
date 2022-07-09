// tests:
console.log(mergeSort([3, 2, 1]));
console.log(mergeSort([3, 2, 4, 1])); // should show [1,2,3,4]
console.log(mergeSort([5, 3, 4, 2, 1])); // should show [1,2,3,4,5]
console.log(mergeSort([1, 3, 5, 7, 9, 2, 4, 6, 8, 0])); // should show [0,1,2,3,4,5,6,7,8,9]

function mergeSort(a) {
  if (a.length <= 1) return a;

  const middleIndex = Math.floor(a.length / 2);
  let left = a.slice(0, middleIndex);
  let right = a.slice(middleIndex);

  left = mergeSort(left); // re-assign subarray to get sorted sub-array
  right = mergeSort(right); // re-assign subarray to get sorted version

  return merge(left, right); // merge the reassigned sub-arrays

  /** @return {number[]} */
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
    while (i < left.length) {
      output.push(left[i]);
      i++;
    }
    while (j < right.length) {
      output.push(right[j]);
      j++;
    }
    return output;
  }
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
