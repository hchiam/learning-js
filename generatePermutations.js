console.time();
console.log(generatePermutations([1, 2, 3]));
console.timeEnd();

function generatePermutations(array) {
  const permutations = [];
  const chosen = {};

  function gp(array, permutation = []) {
    const usedAllItems = permutation.length === array.length;
    if (usedAllItems) {
      permutations.push([...permutation]);
    } else {
      for (let v of array) {
        if (chosen[v]) continue;

        // use v next:
        chosen[v] = true;
        permutation.push(v);
        gp(array, permutation);

        // use something else next:
        chosen[v] = false;
        permutation.pop();
      }
    }
  }

  gp(array, []);
  return permutations;
}
