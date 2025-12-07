/**
 * @param {string} s
 * @param {string} t
 * @return {string}

https://leetcode.com/problems/minimum-window-substring

goal: time O(m+n)
naive: at each index of s, try t time O(m n)
since order doesn't matter, maybe a HT? HT+stack?
ADOBECODEBANC ABC
111111   2222
1112233332110
^  ^ ^   vv v
ADOABECODE ABC
1111111
   2222
^  Y^ ^
also need to handle duplicates
ADABECODE AABC
112334444
^ ^^ ^
this seems complicated, maybe try something simpler first?
or maybe instead of HT+stack, HT+sliding window?
ADOBECODEBANC ABC
111111
   22222222
     333333
         4444
          --x
ADOABECODE ABC
1111111
   2222
    333333x
     -----x
ADABECODE AABC
111111
  ------x
looks like time O(m + n)
AEIO U



NEEDED MORE HELP - SAW THIS:  
https://leet-codes.blogspot.com/2022/10/minimum-window-substring.html
 */
var minWindow = function (s, t) {
  if (!s || !t) return "";
  const m = s.length;
  const n = t.length;
  if (m < n) return "";
  // DON'T DO THIS: if (m === n && s !== t) return '';
  if (m === n && s === t) return s;

  const need = {}; // counts of letters to use, -ve = extras
  for (let v of t) need[v] = (need[v] || 0) + 1;
  let coveredCount = 0; // count of useful letters
  let bestWindowIndices = [0, 0];
  let minLen = Infinity;
  let left = 0;
  let right = 0;
  while (right < m) {
    // move right pointer just one step:

    let v = s[right];
    if (v in need) {
      if (need[v] >= 1) coveredCount++; // cover b/c need to cover
      need[v]--; // use right
    }
    right++;

    // move left pointer until un-used something:

    while (coveredCount === n) {
      // = still covered all of t's letters to use
      if (right - left < minLen) {
        // update best output:
        minLen = right - left;
        bestWindowIndices = [left, right];
      }

      // move left pointer:

      v = s[left];
      if (v in need) {
        if (need[v] >= 0) coveredCount--; // de-cover because un-using non-extra (= need)
        need[v]++; // may need more to cover more left in future
      }
      left++;
    }
  }

  return s.slice(bestWindowIndices[0], bestWindowIndices[1]);
};

module.exports = {
  minWindow,
};
