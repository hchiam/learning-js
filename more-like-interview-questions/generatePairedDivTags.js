function generatePairedDivTags(numberOfTags) {
  // instead of trying to generate solution n from solution n-1,
  // build up all solutions at the same time as branches/variants
  // (compare to my older generateParenthesis_fast.js code)
  const solutions = [];
  _recurse(solutions, numberOfTags, numberOfTags, "");
  return solutions.map((solution) =>
    solution.replaceAll("o", "<div>").replaceAll("c", "</div>")
  );
}

function _recurse(output, openCount, closeCount, subsolution) {
  const doneSubsolution = closeCount === 0;
  if (doneSubsolution) {
    output.push(subsolution);
  } else {
    const canAddOpen = openCount > 0;
    const canAddClose = openCount < closeCount;
    if (canAddOpen) {
      const nextSubSolution = subsolution + "o";
      _recurse(output, openCount - 1, closeCount, nextSubSolution);
    }
    if (canAddClose) {
      const nextSubSolution = subsolution + "c";
      _recurse(output, openCount, closeCount - 1, nextSubSolution);
    }
  }
}

function doesSolutionMatch(output, solution) {
  if (output.length !== solution.length) return false;
  const outputAsHashTable = {};
  output.forEach((o) => (outputAsHashTable[o] = true));
  return solution.every((s) => outputAsHashTable[s]);
}

module.exports = {
  generatePairedDivTags,
  doesSolutionMatch,
};
