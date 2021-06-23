// tests:
alert(mergeSort([3, 2, 4, 1])); // should show [1,2,3,4]
alert(mergeSort([5, 3, 4, 2, 1])); // should show [1,2,3,4,5]

function mergeSort(a) {
  if (a.length < 2) {
    return a;
  } else if (a.length == 2) {
    if (a[0] > a[1]) return [a[1], a[0]];
    return a;
  }
  let len2 = Math.round(a.length / 2);
  let L = mergeSort(a.slice(0, len2));
  let R = mergeSort(a.slice(len2));
  let i = 0;
  let j = 0;
  let output = [];
  while (i < L.length && j < R.length) {
    if (L[i] < R[j]) {
      output.push(L[i]);
      i++;
    } else {
      output.push(R[j]);
      j++;
    }
  }
  if (i < L.length) output = output.concat(L.slice(i));
  if (j < R.length) output = output.concat(R.slice(j));
  return output;
}
