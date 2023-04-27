/**
 * assumes non-empty array and majority exists
 * @param {number[]} numbers
 * @return {number}
 */
const majorityElement = (numbers) => {
  const useHashmapApproach = false;
  if (useHashmapApproach) {
    return hashmapApproach(numbers);
  } else {
    return boyerMooreMajorityVotingAlgorithm(numbers);
  }
};

const hashmapApproach = (numbers) => {
  const ht = {};
  let maxCount = 0;
  let maxVal = null;
  numbers.forEach((n) => {
    if (ht.hasOwnProperty(n)) {
      ht[n]++;
    } else {
      ht[n] = 1;
    }
    if (ht[n] > maxCount) {
      maxVal = n;
    }
    maxCount = Math.max(maxCount, ht[n]);
  });
  return maxVal;
};

/** can be adapted to get the majority with streamed data (but returns something even when there's no true majority - requires second pass): */
const boyerMooreMajorityVotingAlgorithm = (numbers) => {
  // https://en.wikipedia.org/wiki/Boyer–Moore_majority_vote_algorithm
  // https://leetcode.com/problems/majority-element/solution/
  let count = 0;
  let candidate = null;
  numbers.forEach((n) => {
    if (count === 0) {
      candidate = n;
      count = 1;
    } else if (n === candidate) {
      count++;
    } else {
      count--;
    }
  });
  return candidate;
};

console.log(majorityElement([55, 55, 55, 55, 1, 2, 3]) === 55);
console.log(majorityElement([55, 1, 55, 2, 55, 3, 55]) === 55);
console.log(majorityElement([7]) === 7);
console.log(majorityElement([3, 2, 3]) === 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
console.log(majorityElement([2, 2, 2, 2, 1, 1, 1, 2, 1]) === 2);
console.log(majorityElement(
    [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7]) === 7);
console.log(majorityElement(
    [7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]) === 5);
