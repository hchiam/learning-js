/* eslint-disable require-jsdoc */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1, m, nums2, n) => {
  // naivelyFillSeparateArray(nums1, m, nums2, n);
  fillFromRight(nums1, m, nums2, n);
};

function fillFromRight(nums1, m, nums2, n) {
  // assumes 0 is empty (unless internal)
  // assumes nums1 and nums2 are sorted
  // assumes nums1.length >= m + n
  const startIndex = m + n - 1;
  let i = m - 1;
  let j = n - 1;
  for (let k = startIndex; k >= 0; k--) {
    if (j < 0) {
      return;
    }
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
  }
}

function naivelyFillSeparateArray(nums1, m, nums2, n) {
  // assumes 0 is empty (unless internal)
  // assumes nums1 and nums2 are sorted
  // assumes nums1.length >= m + n
  const output = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      output[k] = nums1[i];
      i++;
      k++;
    } else {
      output[k] = nums2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    output[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    output[k] = nums2[j];
    j++;
    k++;
  }
  replaceArr(nums1, output, nums1.length);
}

function replaceArr(a, b, aLength) {
  for (let i = 0; i < aLength; i++) {
    a[i] = b[i];
  }
}

function solutionWrapper(n1, m, n2, n) {
  merge(n1, m, n2, n);
  return n1;
}

module.exports = {
  solutionWrapper,
};
