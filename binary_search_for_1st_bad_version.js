// https://leetcode.com/problems/first-bad-version/submissions/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * https://leetcode.com/problems/first-bad-version/submissions/
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
      const mid = Math.floor(left / 2 + right / 2);
      if (isBadVersion(mid)) {
        // guarantee right is bad
        right = mid; // will return right
      } else {
        left = mid + 1; // can safely move left side in to try
      }
    }

    return right;
  };
};
