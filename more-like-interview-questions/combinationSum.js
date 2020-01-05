/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/combination-sum/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {[number[]]}
 */
const combinationSum = (candidates, target) => {
  const combos = [];
  checkCombo(startingIndex=0, combo=[]);
  return combos;

  function checkCombo(startingIndex, combo) {
    const sum = combo.reduce((a, b) => a + b, 0);
    if (sum === target) {
      // ASIDE: need .slice to avoid affecting original array!
      combos.push(combo.slice());
    } else if (sum < target) {
      for (let i = startingIndex; i < candidates.length; i++) {
        // only starting at startingIndex means you don't duplicate work
        combo.push(candidates[i]);
        checkCombo(i, combo);
        combo.pop();
        // ASIDE: push/pop is apparently faster than combo.concat(candidates[i])
      }
    }
  };
};

function solutionWrapper(...parameters) {
  return combinationSum(...parameters);
}

module.exports = {
  solutionWrapper,
};
