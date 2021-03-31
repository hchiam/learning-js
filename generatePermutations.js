console.time();
console.log(generatePermutations([1, 2, 3]));
// generatePermutations([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.timeEnd();

/* STEP 1: JUST TRY TO GET PERMUTATIONS OF 2 CHOICES: */

// function generatePermutations(array) {
//   const permutations = [];
//   for (let i = 0; i < array.length; i++) {
//     const permutation = [];
//     permutation.push(array[i]);
//     for (let j = 0; j < array.length; j++) {
//       if (j !== i) {
//         permutations.push([...permutation, array[j]]);
//       }
//     }
//   }
//   return permutations;
// }

/* STEP 2: BUILD ON THAT TO COME UP WITH THE RECURSIVE SOLUTION: */

// function generatePermutations(array) {
//   const permutations = [];
//   function gp(permutation, currentlyChosen = {}) {
//     const usedAllItems = permutation.length === array.length;
//     if (usedAllItems) {
//       permutations.push([...permutation]);
//       return;
//     }
//     for (let j = 0; j < array.length; j++) {
//       if (currentlyChosen[array[j]]) {
//         continue;
//       } else {
//         const permutation = [...permutation, array[j]];
//         currentlyChosen[array[j]] = true;
//         gp(permutation, currentlyChosen);
//         currentlyChosen[array[j]] = false;
//       }
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     const permutation = [];
//     permutation.push(array[i]);
//     const currentlyChosen = {};
//     permutation.map((x) => {
//       currentlyChosen[x] = true;
//     });
//     gp([...permutation], currentlyChosen);
//   }
//   return permutations;
// }

/* STEP 3: SHORTEN THE CODE: */

function generatePermutations(array) {
  const permutations = [];
  const currentlyChosen = {};

  // use recursion:
  function gp(permutation = []) {
    const usedAllItems = permutation.length === array.length; // stop condition
    if (usedAllItems) {
      permutations.push([...permutation]);
      return;
    }
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

  gp();
  return permutations;
}
