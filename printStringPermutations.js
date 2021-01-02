printStringPermutations("abc");
// abc
// acb
// bac
// bca
// cab
// cba

function printStringPermutations(restOfString, candidate = "") {
  const isCandidateReady = restOfString.length === 0;
  if (isCandidateReady) {
    console.log(candidate);
    return;
  }
  [...restOfString].forEach((letter, index) => {
    const restOfSubstring =
      restOfString.substring(0, index) + restOfString.substring(index + 1);
    printStringPermutations(restOfSubstring, candidate + letter);
  });
}
