let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(`Before: \n${arr}`);
sortValleyPeak(arr);
console.log(`After: \n${arr}`);

function sortValleyPeak(arr) {
  const neighbourGap = 1;
  const skip = 2;
  for (let i = neighbourGap; i < arr.length - neighbourGap; i += skip) {
    const maxI = getMaxI(arr, i - 1, i, i + 1);
    if (i !== maxI) swap(arr, i, maxI);
  }
}

function getMaxI(arr, a, b, c) {
  const maxValue = Math.max(arr[a], arr[b], arr[c]);
  if (arr[a] === maxValue) return a;
  if (arr[b] === maxValue) return b;
  return c;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
