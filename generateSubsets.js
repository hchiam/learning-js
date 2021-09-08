console.log(generateSubsets([1, 2, 3]));

function generateSubsets(array) {
  const subsets = [];

  // increment a bit array, to represent all possible combinations
  const numberOfBits = array.length;
  for (let bitArray = 0; bitArray < 1 << numberOfBits; bitArray++) {
    // 1 << 4 = 10000 -> 0000 to 1111
    const subset = [];
    for (let i = 0; i < numberOfBits; i++) {
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
 * numberOfBits = 3
 * 1 << 3 = 1000
 * bitArray = 000 to 111 (0 to 7): 000,001,010,011,100,101,110,111 to generate subsets
 * i = 0 to 2 = shift 0 to 2 bits
 * (1 << i) = 001 to 100: 001,010,100 to check which bit used
 */
