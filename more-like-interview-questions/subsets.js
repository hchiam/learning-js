/* eslint-disable require-jsdoc */

/**
 * @param {number[]} nums
 * @return {[number[]]}
 */
const subsets = (nums) => { // faster solution
  if (!nums || nums.length < 1) return [[]];
  if (nums.length === 1) return [[], nums];
  const output = [];
  const recurse = (set=[], startIndex=0) => {
    output.push(set);
    // (appending an element to the right guarantees uniqueness)
    for (let i=startIndex; i<nums.length; i++) {
      // (clone to avoid affecting the original set array)
      const newSet = set.slice();
      // append element to create new set
      newSet.push(nums[i]);
      // also do the same for each new set:
      recurse(newSet, i + 1);
    }
  };
  recurse(set=[], startIndex=0);
  return output;
};

/**
 * @param {number[]} nums
 * @return {[number[]]}
 */
const subsets_slow = (nums) => {
  if (!nums || nums.length < 1) return [[]];
  if (nums.length === 1) return [[], nums];
  // get the first ones set up first:
  const output = new Set(nums.map((n) => [n]).map(JSON.stringify));
  for (let lengths = 1; lengths < nums.length; lengths++) {
    // for each item in the existing set,
    const existingSet = Array.from(output).slice(); // clone to avoid ref issue
    for (const set of existingSet) {
      // create the next subset using elements in the nums list:
      for (const element of nums) {
        const setItems = JSON.parse(set);
        let candidate = new Set(setItems); // will add a number to this
        const lengthBefore = candidate.size;
        candidate.add(element);
        candidate = new Set(Array.from(candidate).sort());
        const acceptedElement = (candidate.size > lengthBefore);
        const isNewSet = (!output.has(JSON.stringify(Array.from(candidate))));
        if (acceptedElement && isNewSet) {
          output.add(JSON.stringify(Array.from(candidate)));
        }
      }
    }
  }
  // add in the empty subset:
  return [[], ...Array.from(output).map(JSON.parse)];
};

function solutionWrapper(params) {
  return subsets(params);
}


module.exports = {
  solutionWrapper,
};
