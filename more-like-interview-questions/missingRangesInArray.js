console.log(getMissingRangesInArray([1, 4, 6], 0, 1000));
console.log(getMissingRangesInArray([], 0, 1000));
console.log(getMissingRangesInArray([0], 0, 1000));
console.log(getMissingRangesInArray([1000], 0, 1000));

/*
1) Brute force: scan from lower to upper and check HT -> Ot(r), which is > Ot(n).
2) Make use of the fact nums is sorted!!! -> scan nums instead -> Ot(n).
*/

/**
 * @param {number[]} nums numbers within the inclusive range [lower, upper]
 * @param {number} lower
 * @param {number} upper
 * @returns {number[]} of the contiguous ranges in lower-upper that are missing from nums
 */
function getMissingRangesInArray(nums, lower, upper) {
  const ranges = [];

  // if we're allowed to edit the nums array: (or if we can clone the nums array)
  // nums.unshift(lower-1);
  // nums.push(upper+1);

  // if can't edit nums array:
  if (!nums.length) return [getRangeString(lower, upper)];

  // if can't edit nums array:
  const haveLeadingRange = lower < nums[0];
  if (haveLeadingRange) {
    ranges.push(getRangeString(lower, nums[0] - 1));
  }

  let i = 1;

  for (; i < nums.length; i++) {
    const previous = nums[i - 1];
    const current = nums[i];
    const isIncrementingBy1 = previous + 1 === current;
    if (!isIncrementingBy1) {
      const start = previous + 1;
      const end = current - 1;
      ranges.push(getRangeString(start, end));
    }
  }

  // if can't edit nums array:
  const haveTrailingRange = nums[nums.length - 1] < upper;
  if (haveTrailingRange) {
    ranges.push(getRangeString(nums[nums.length - 1] + 1, upper));
  }

  return ranges;
}

function getRangeString(start, end) {
  if (start === end) return `${start}`;
  return `${start}->${end}`;
}
