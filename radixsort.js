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
  // Ot((b + n d) * d) Os(b + n d)

  if (!array) return [];
  if (array.length < 2) return array;

  const maxDigits = getMaxDigits(array); // Ot(n d) Os(n d)

  //            0  1  2  3  4  5  6  7  8  9
  let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Ot(b) Os(b)
  let tempArray = new Array(array.length).fill(null); // Ot(n) Os(n)

  for (let d = maxDigits - 1; d >= 0; d--) {
    // Ot(d)

    setCounts(array, d, counts, maxDigits); // Ot(n d) Os(1)
    preprocessCountsToGetLastIndicesPlus1(counts); // Ot(b) Os(1)
    placeInTempArray(array, d, counts, tempArray, maxDigits); // Ot(n d)
    updateArray(array, tempArray); // Ot(n)

    counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Ot(b) Os(b)
    tempArray = new Array(array.length).fill(null); // Ot(n) Os(n)
  }

  return array;
}

/** Ot(n d) Os(n d) */
function getMaxDigits(array) {
  return Math.max(...array.map((x) => getDigitCounts(x)));
}

/** Ot(d) Os(d) */
function getDigitCounts(number) {
  return String(number).length;
}

/** Ot(n d) Os(1) */
function setCounts(array, d, counts, maxDigits) {
  array.forEach((x) => {
    // Ot(n)

    const digit = Number(String(x).padStart(maxDigits, 0)[d]); // Ot(d)
    const index = digit;
    counts[index]++;
  });
}

/** Ot(b) Os(1) */
function preprocessCountsToGetLastIndicesPlus1(counts) {
  for (let i = 1; i < counts.length; i++) {
    // O(b)

    counts[i] += counts[i - 1];
  }
}

/** Ot(n d) */
function placeInTempArray(array, d, counts, tempArray, maxDigits) {
  // start placing from right since the counts array indices start from right
  for (let i = array.length - 1; i >= 0; i--) {
    // Ot(n)

    const number = array[i];
    const digit = Number(String(number).padStart(maxDigits)[d]); // Ot(d)
    const index = digit;
    const tempArrayIndex = counts[index] - 1; // index = count - 1
    counts[index]--; // used spot, decrement to left position
    tempArray[tempArrayIndex] = number;
  }
}

/** Ot(n) */
function updateArray(array, tempArray) {
  for (let i = 0; i < array.length; i++) {
    array[i] = tempArray[i];
  }
}

module.exports = {
  radixSort,
};
