console.time();
console.log(generatePermutations([1, 2, 3]));
console.timeEnd();

function generatePermutations(array) {
  const permutations = [];
  const currentlyChosen = {};

  // use recursion:
  function gp(array, permutation = []) {
    const usedAllItems = permutation.length === array.length; // stop condition
    if (usedAllItems) {
      permutations.push([...permutation]);
    } else {
      for (let v of array) {
        if (currentlyChosen[v]) continue;

        // use v next:
        currentlyChosen[v] = true;
        permutation.push(v);
        gp(array, permutation);

        // use something else next (before recurse to finish the permutation):
        currentlyChosen[v] = false;
        permutation.pop();
      }
    }
  }

  gp(array, []);
  return permutations;
}
