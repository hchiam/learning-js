// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/submissions/

function solutionWrapper(...parameters) {
  // return search(...parameters);
  return search2(...parameters);
}

module.exports = {
  solutionWrapper,
};

/**
 * 2 solutions:
 * search = basically binary search but if not in range, look to other side of pivot
 * search2 = binary search for pivot index, then normal binary search on left/right side of pivot
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);

    const foundIt = target === nums[middle];
    if (foundIt) return true;

    // because duplicates are allowed:
    const needToScanRight = nums[left] === nums[middle];
    if (needToScanRight) {
      left++;
      continue;
    }

    // modify binary search with pivot-related checks:
    const midIsLeftOfPivot = nums[left] < nums[middle];
    if (midIsLeftOfPivot) {
      if (target === nums[left]) return true;
      const inNormalRange = nums[left] < target && target < nums[middle];
      if (inNormalRange) {
        right = middle - 1; // normal binary search
      } else {
        left = middle + 1; // value not in range -> look right of pivot
      }
    } else {
      // mid is right of pivot:
      if (target === nums[right]) return true;
      const inNormalRange = nums[middle] < target && target < nums[right];
      if (inNormalRange) {
        left = middle + 1; // normal binary search
      } else {
        right = middle - 1; // value not in range -> look left of pivot
      }
    }
  }

  return false;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search2(nums, target) {
  if (!nums || nums.length === 0) return false;
  if (nums[0] === target) return true;

  const getPivotIndex = () => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // use index immediately left of cliff as pivot:
      // (note: it still works if you use mid+1, the buttom of cliff)
      const isImmediatelyLeftOfCliff = nums[mid] > nums[mid + 1];
      if (isImmediatelyLeftOfCliff) return mid;

      // because duplicate values are allowed:
      const shouldScanToTheRight = nums[left] === nums[mid];
      if (shouldScanToTheRight) {
        left++;
        continue;
      }

      // do binary search for pivot index:
      const isOnRightSideOfCliff = nums[left] > nums[mid];
      if (isOnRightSideOfCliff) {
        right = mid - 1;
      } else {
        // binary search on left side: (not scanning && left < mid val)
        left = mid + 1;
      }
    }

    // if didn't pivot at all to begin with:
    return nums.length - 1;
  };

  const pivot = getPivotIndex();
  if (nums[pivot] === target) return true;

  // do a binary search only on the left or right side of the pivot:
  const isTargetLeftOfPivot = nums[0] < target;
  let left = isTargetLeftOfPivot ? 0 : pivot + 1;
  let right = isTargetLeftOfPivot ? pivot : nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const foundIt = nums[mid] === target;
    if (foundIt) return true;

    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
