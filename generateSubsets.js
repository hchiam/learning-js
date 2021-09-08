console.log(generateSubsets([1, 2, 3]));

// Why until bitArray < (1 << numberOfItems) ?
// Because we want to iterate numbers to generate all subsets with numberOfItems items.

// Why until i < numberOfItems ?
// Because we want to iterate that many bits = check which items are in the subset.

function generateSubsets(array) {
  const subsets = [];

  // increment a bit array, to represent all possible combinations
  const numberOfItems = array.length;
  for (let bitArray = 0; bitArray < 1 << numberOfItems; bitArray++) {
    // 1 << 4 = 10000 -> 0000 to 1111
    const subset = [];
    for (let i = 0; i < numberOfItems; i++) {
      // (1 << i) = check if bit used in bitArray
      if (bitArray & (1 << i)) subset.push(array[i]);
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
 * bitArray = 000 to 111 (0 to 7): 000,001,010,011,100,101,110,111 to generate subsets
 * i = 0 to 2 = shift 0 to 2 bits
 * (1 << i) = 001 to 100: 001,010,100 to check which bit used
 */
