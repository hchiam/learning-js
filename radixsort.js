/**
radix sort: (best implemented with counting sort to stay Ot((b + n) * d)) 
1) count occurrences
2) use those counts - 1 as right-most indices of bucket sections in tempArray
3) because those indices are from right, read from right into new array
4) repeat 1-3 until you're done all digits
n = number of numbers
d = digits of longest number
b = base = number of unique digits
*/
function radixSort(array) {
  if (!array) return [];
  if (array.length < 2) return array;

  const maxDigits = getMaxDigits(array);

  //            0  1  2  3  4  5  6  7  8  9
  let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let tempArray = new Array(array.length).fill(null);
  for (let d = maxDigits - 1; d >= 0; d--) {
    setCounts(array, d, counts, maxDigits);
    preprocessCountsToGetLastIndicesPlus1(counts);
    placeInTempArray(array, d, counts, tempArray, maxDigits);
    updateArray(array, tempArray);

    counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tempArray = new Array(array.length).fill(null);
  }
  return array;
}

function getMaxDigits(array) {
  // Ot(n d) Os(n d)
  return Math.max(...array.map((x) => getDigitCounts(x)));
}

function getDigitCounts(number) {
  // Ot(d) Os(d)
  return String(number).length;
}

function setCounts(array, d, counts, maxDigits) {
  array.forEach((x) => {
    const digit = Number(String(x).padStart(maxDigits, 0)[d]);
    const index = digit;
    counts[index]++;
  });
}

function preprocessCountsToGetLastIndicesPlus1(counts) {
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }
}

function placeInTempArray(array, d, counts, tempArray, maxDigits) {
  // start placing from right since the counts array indices start from right
  for (let i = array.length - 1; i >= 0; i--) {
    const number = array[i];
    const digit = Number(String(number).padStart(maxDigits)[d]);
    const index = digit;
    const tempArrayIndex = counts[index] - 1; // index = count - 1
    counts[index]--; // used spot, decrement to left position
    tempArray[tempArrayIndex] = number;
  }
}

function updateArray(array, tempArray) {
  for (let i = 0; i < array.length; i++) {
    array[i] = tempArray[i];
  }
}

module.exports = {
  radixSort,
};
