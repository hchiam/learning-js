console.time();
// console.log(generatePermutations([1, 2, 3]));
generatePermutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.timeEnd();

function generatePermutations(array) {
  const permutations = [];
  const currentlyChosen = {};

  // use recursion:
  function gp(permutation = []) {
    const usedAllItems = permutation.length === array.length; // stop condition
    if (usedAllItems) {
      permutations.push([...permutation]);
    } else {
      for (let v of array) {
        if (currentlyChosen[v]) continue;

        // use v next:
        currentlyChosen[v] = true;
        permutation.push(v);
        gp(permutation);

        // use something else next (before recurse to finish the permutation):
        currentlyChosen[v] = false;
        permutation.pop();
      }
    }
  }

  gp();
  return permutations;
}
