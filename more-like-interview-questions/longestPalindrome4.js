// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
BCR: Ot(n) Os(n)
naive: all start & ends: Ot(n^2) Os(n)
naive: all indices outwards, but account for even/odd too: Ot(n^2) Os(n)
what if we used a stack? how might that work?
    acbbd
    [a,c,d] bb?
    babad
    [b,a,b,a,d] ??
or maybe this:
https://leetcode.com/problems/longest-palindromic-substring/solutions/3497051/c-java-python-javascript-detailed-explanation-easy-solution-3-approaches/

manacher's algorithm? make use of precomputed work!
    Ot(n) Os(1)
    https://leetcode.com/problems/longest-palindromic-substring/solutions/3345856/manacher-js-beats-99/

AEIOU
 */
function longestPalindrome(s) {
  if (!s) return "";
  let str = "@#";
  for (let i = 0; i < s.length; i++) {
    str += s[i] + "#";
  }
  str += "$";

  let i = 0;
  let center = 0;
  let right = 0;
  let maxLength = 0;
  let maxCenter = 0;
  let p = new Array(str.length).fill(0);
  while (i < str.length) {
    // store palindrome size at each p[i]???
    if (i < right) p[i] = Math.min(right - i, p[2 * center - i]);

    while (
      // while can expand:
      i - p[i] - 1 >= 0 &&
      i + p[i] + 1 < str.length &&
      str[i - p[i] - 1] === str[i + p[i] + 1]
    ) {
      p[i]++; // store expanded size
    }

    // found better:
    if (i + p[i] > right) {
      center = i; // update to better
      right = i + p[i]; // update to better
    }
    // found better:
    if (p[i] > maxLength) {
      maxLength = p[i]; // update to better
      maxCenter = i; // update to better
    }
    i++;
  }
  // use max palindrome location info:
  const maxStart = Math.floor((maxCenter - maxLength) / 2);
  const maxPalindrome = s.slice(maxStart, maxStart + maxLength);
  return maxPalindrome;
}

module.exports = {
  longestPalindrome4: longestPalindrome,
};
