// nodemon -x 'node generateSubsets.js'

console.log(
  generateSubsets_binaryMethod([1, 2, 3]).sort(
    (a, b) => Number(a.join("")) - Number(b.join(""))
  )
);

// Why until binaryCombo < (1 << numberOfItems) ?
// Because we want to iterate numbers to generate all subsets with numberOfItems items.

// Why until i < numberOfItems ?
// Because we want to iterate that many bits = check which items are in the subset.

// O(n * 2^n) time, O(n * 2^n) space
function generateSubsets_binaryMethod(array) {
  const subsets = [];

  // increment a bit array, to represent all possible combinations
  const numberOfItems = array.length;
  for (let binaryCombo = 0; binaryCombo < 1 << numberOfItems; binaryCombo++) {
    // 1 << 4 = 10000 -> 0000 to 1111
    const subset = [];
    for (let i = 0; i < numberOfItems; i++) {
      // (1 << i) = check if bit used in binaryCombo
      if (binaryCombo & (1 << i)) subset.push(array[i]);
    }
    subsets.push(subset);
  }

  return subsets;
}

/**
 * example:
 *
 * numberOfItems = 3
 * 1 << 3 = 1000
 * binaryCombo = 000 to 111 (0 to 7): 000,001,010,011,100,101,110,111 to generate subsets
 * i = 0 to 2 = shift 0 to 2 bits
 * (1 << i) = 001 to 100: 001,010,100 to check which bit used
 */

/**
 * alternatively:
 *
 * [] // <-- append 1 to this existing set
 * [], [1] // <-- append 2 to these existing sets
 * [], [1], [2], [1, 2] // <-- append 3 to these existing sets
 * [], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3] // same result as other way!
 */

console.log(
  generateSubsets_appendToExistingWay([1, 2, 3]).sort(
    (a, b) => Number(a.join("")) - Number(b.join(""))
  )
);

// O(n * 2^n) time, O(n * 2^n) space
function generateSubsets_appendToExistingWay(array) {
  const subsets = [[]]; // initialize with [] set

  for (let item of array) {
    const lengthBeforePushAnother = subsets.length;
    for (let i = 0; i < lengthBeforePushAnother; i++) {
      const subset = subsets[i];
      subsets.push([...subset, item]);
    }
  }

  return subsets;
}
