// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
BCR: Ot(n) Os(1) - we just need the count
idea 1: brute force: check all possible substrings
    Ot(all possible substrings)
    Ot(n + n/2 + n/3 + ...) -> Ot(n^2 * n), including creating strings
    or n^2 start-end pairs and for checking
    Ot(n^3)
idea 2: HMW make use of previously-calculated palindromes?
    track if it's reversible or repeated characters or finished?
    use a stack to do all those things?
    DP table? Ot(n^2)?
    or DP with reusing an array? Ot(n^2)?
        start at each index and use a stack to tell whether to count?
    or simply grow rightwards from each index?
        do we avoid duplicates?
        Ot(n^2)
        can use stack, but how to handle odd number palindromes?
            e.g. aba --> maybe transform by double, i.e. aabbaa?
                even x2 = even ; odd x2 = even
            or maybe check backwards?
                aba
                aabacabaa
                322101110 + 9 = wrong --> should be 8 + 9 = 17 only
        and check whenever get a zero-length stack
    or grow outwards from each index?
        Ot(n^2)
        aabacabaa
        112151211
        how to handle even palindromes? borrow idea from Manacher's?
        #a#a#b#a#c#a#b#a#a# (0 if #)
        0111020105010201110 (add if not on #) = 17 = correct
AEIO U
 */
function countSubstrings(s) {
  // Ot(n^2) Os(n)
  let string = transformStringToHandleEvenAndOddInOnePass(s); // Ot(n) Os(n)
  const countCharacters = s.length;
  return countCharacters + countWhileGrowingFromEachIndex(string); // Ot(n^2) Os(1)
}

function transformStringToHandleEvenAndOddInOnePass(s) {
  // Ot(n) Os(n)
  // aabacabaa -> #a#a#b#a#c#a#b#a#a#
  const output = [];
  for (let letter of s) {
    // Ot(n)
    output.push("#");
    output.push(letter);
  }
  output.push("#");
  return output.join(""); // Ot(n) Os(n)
}

function countWhileGrowingFromEachIndex(string) {
  // Ot(n^2) Os(1)
  let count = 0;
  for (let i = 1; i < string.length - 1; i++) {
    // Ot(n)
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 && right < string.length) {
      // Ot(n)
      if (string[left] !== string[right]) break;
      if (string[left] !== "#") count++; // ===
      left--;
      right++;
    }
  }
  return count;
}

module.exports = {
  countSubstrings,
};
