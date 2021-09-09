// first try recursion while building arrays as you go:

function getPermutations_buildArrayAsGo(array) {
  if (!array || !array.length) return [];
  const permutations = [];
  recurse(array, [], permutations);
  return permutations;

  function recurse(choicesLeft, permutationSoFar, permutations) {
    if (!choicesLeft || (!choicesLeft.length && permutationSoFar.length)) {
      permutations.push(permutationSoFar);
    } else {
      for (let i = 0; i < choicesLeft.length; i++) {
        // avoid reusing items:
        const newChoicesLeft = [
          ...choicesLeft.slice(0, i),
          ...choicesLeft.slice(i + 1),
        ];
        // build up permutation step by step:
        const newPermutation = [...permutationSoFar, choicesLeft[i]];

        recurse(newChoicesLeft, newPermutation, permutations);
      }
    }
  }
}

// now try recursion with swaps to defer building arrays to end:

function getPermutations_swap_andOnlyBuildWhenReady(array) {
  if (!array || !array.length) return [];
  const permutations = [];
  recurse(0, array, permutations);
  return permutations;

  function recurse(i, array, permutations) {
    if (i === array.length - 1) {
      permutations.push([...array]);
    } else {
      // j starts at i
      // so we can also include permutations that don't need a swap
      for (let j = i; j < array.length; j++) {
        swap(i, j, array); // swap pair
        recurse(i + 1, array, permutations); // i + 1 to look right
        swap(j, i, array); // restore previous positions of pair
      }
    }
  }

  function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = {
  getPermutations_buildArrayAsGo,
  getPermutations_swap_andOnlyBuildWhenReady,
};
