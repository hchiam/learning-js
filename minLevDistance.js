/* eslint-disable require-jsdoc */

function minLevDistance(s1, s2) {
  const dpTable = [[]]; // s1.length x s2.length
  for (let row = 0; row < s1.length; row++) {
    dpTable[row] = [];
    for (let col = 0; col < s2.length; col++) {
      dpTable[row][col] = -1;
    }
  }
  // get the last cell in the DP table to get the final answer:
  return levenshteinDist(s1, s1.length-1, s2, s2.length-1, dpTable);
}

// use recursion to get the answer from the min of earlier cells:
function levenshteinDist(s1, s1Index, s2, s2Index, dpTable) {
  if (s1Index < 0) {
    return s2Index + 1; // s1 === "" -> s1 insert all characters in s2 === s2
  } else if (s2Index < 0) {
    return s1Index + 1; // s2 === "" -> s1 delete all characters in s1 === s2
  }

  const alreadyHaveMinDistance = (dpTable[s1Index][s2Index] !== -1);
  if (alreadyHaveMinDistance) {
    return dpTable[s1Index][s2Index];
  }

  const charactersMatch = (s1.charAt(s1Index) === s2.charAt(s2Index));
  if (charactersMatch) {
    dpTable[s1Index][s2Index] = 0 + // no extra change to make
        levenshteinDist(s1, s1Index-1, s2, s2Index-1, dpTable);
  } else { // character mismatch
    // Delete = use previous letter in s1:
    const doDelete = levenshteinDist(s1, s1Index-1, s2, s2Index, dpTable);
    // Insert = use letter from s2:
    const insert = levenshteinDist(s1, s1Index, s2, s2Index-1, dpTable);
    // Substitute = combine delete s1 & insert s2:
    const substitute = levenshteinDist(s1, s1Index-1, s2, s2Index-1, dpTable);
    // get min of these 3 options:
    dpTable[s1Index][s2Index] = 1 + // add 1 for performing a change
        Math.min(doDelete, insert, substitute); // get min
  }

  return dpTable[s1Index][s2Index];
}

function solutionWrapper(s1, s2) {
  return minLevDistance(s1, s2);
}

module.exports = {
  solutionWrapper,
};
