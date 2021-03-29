console.log(generateSubsets([1, 2, 3]));

function generateSubsets(array) {
  const subsets = [];

  // increment a bit array, to represent all possible combinations
  for (let b = 0; b < 1 << array.length; b++) {
    const subset = [];
    for (let i = 0; i < array.length; i++) {
      if (b & (1 << i)) subset.push(array[i]);
    }
    subsets.push(subset);
  }

  return subsets;
}
