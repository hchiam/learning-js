// (linted with Google style guide ES Lint rules)

// I reworked code found here: https://medium.com/@bhprtk/longest-palindromic-substring-a8190fab03ff

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  // check invalid input
  if (!s || s.length <= 1) {
    return s;
  }

  // fallback
  let longest = s.substring(0, 1);
  for (let i = 0; i < s.length; i++) {
    // try expanding from 1 character ("odd seeds": 1->3->5->7->...)
    let temp = growMaxPalindromeFromSeed(s, i, i);
    if (temp.length > longest.length) {
      longest = temp;
    }

    // try expanding from 2 characters ("even seeds": 2->4->6->8->...)
    temp = growMaxPalindromeFromSeed(s, i, i + 1);
    if (temp.length > longest.length) {
      longest = temp;
    }
  }

  return longest;
};

const growMaxPalindromeFromSeed = (s, begin, end) => {
  while (isWithinRange(s, begin, end) && isStillPalindrome(s, begin, end)) {
    begin--;
    end++;
  }

  // begin+1 since last -- is not checked
  // end since stop before it
  return s.substring(begin + 1, end);
};

const isWithinRange = (s, begin, end) => {
  return begin >= 0 && end < s.length;
};

const isStillPalindrome = (s, begin, end) => {
  return s[begin] === s[end];
};

// const t0 = performance.now();
console.log(longestPalindrome('babad') === 'bab');
console.log(longestPalindrome('babad') !== 'aba');
console.log(longestPalindrome('babab') === 'babab');
console.log(longestPalindrome('aaaaa') === 'aaaaa');
console.log(longestPalindrome('cbbd') === 'bb');
console.log(longestPalindrome('abcdcabbacdcxy') === 'cdcabbacdc');
console.log(longestPalindrome('aabcdcabbacdcxya') === 'cdcabbacdc');
console.log(longestPalindrome('') === '');
console.log(longestPalindrome('aababaaaaabobaaaaababaa') ===
  'aababaaaaabobaaaaababaa'
);
console.log(longestPalindrome('aababaaaaabobaaaaaababaa') === 'aaaaabobaaaaa');
console.log(longestPalindrome('ac') === 'a');
console.log(longestPalindrome('abcdefghijklmnoqrstuvwxyz') === 'a');
// const t1 = performance.now();
// console.log(`Call took ${t1-t0} ms`);
