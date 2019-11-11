/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => { // still too slow: O(n^2)
  if (!s || s.length === 0) return '';
  if (s.length === 1) return s;
  const palindromeIndices = {};
  let maxPalindrome = s[0];
  let tempMaxPalindrome = s[0];
  // aa
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      palindromeIndices[i] = true;
      palindromeIndices[i + 1] = true;
      tempMaxPalindrome = growPalindrome(s, i, i+1, palindromeIndices);
      if (tempMaxPalindrome.length > maxPalindrome.length) {
        maxPalindrome = tempMaxPalindrome;
      }
    }
  }
  // aba
  for (let i = 0; i < s.length - 2; i++) {
    if (s[i] === s[i + 2]) {
      palindromeIndices[i] = true;
      palindromeIndices[i + 1] = true;
      palindromeIndices[i + 2] = true;
      tempMaxPalindrome = growPalindrome(s, i, i+2, palindromeIndices);
      if (tempMaxPalindrome.length > maxPalindrome.length) {
        maxPalindrome = tempMaxPalindrome;
      }
    }
  }
  return maxPalindrome;
};

/**
 * @param {string} s
 * @param {number} headIndex
 * @param {number} tailIndex
 * @param {object} palindromeIndices
 * @return {string}
 */
const growPalindrome = (s, headIndex, tailIndex, palindromeIndices) => {
  let maxPalindrome = s.substring(headIndex, tailIndex + 1);
  let i = headIndex - 1;
  let j = tailIndex + 1;
  while (i >= 0 && j < s.length) {
    if (s[i] !== s[j]) {
      return maxPalindrome;
    } else {
      palindromeIndices[i] = true;
      palindromeIndices[j] = true;
      maxPalindrome = s.substring(i, j + 1);
      i--;
      j++;
    }
  }
  return maxPalindrome;
};

const check = (string, correctAnswer) => {
  const response = longestPalindrome(string);
  if (response === correctAnswer) {
    console.log('ok');
  } else {
    console.log('error: ' + response + ' !== ' + correctAnswer, string);
  }
};

const start = new Date().getTime();

check(string=null, correctAnswer='');
check(string='', correctAnswer='');
check(string='a', correctAnswer='a');
check(string='ab', correctAnswer='a');
check(string='aa', correctAnswer='aa');
check(string='aaa', correctAnswer='aaa');
check(string='abc', correctAnswer='a');
check(string='babad', correctAnswer='bab');
check(string='cbbd', correctAnswer='bb');
check(string='aaaa', correctAnswer='aaaa');
check(string='aaaaa', correctAnswer='aaaaa');
check(string='abcde', correctAnswer='a');
check(string='abcdedcdcdedcxy', correctAnswer='cdedcdcdedc');
check(string='aaaaaaaaaaaaaaaaaaaaaaaaaaa',
    correctAnswer='aaaaaaaaaaaaaaaaaaaaaaaaaaa');
check(string='aaaaaaaaaaaaaaaaaaaaaaaaaaab',
    correctAnswer='aaaaaaaaaaaaaaaaaaaaaaaaaaa');
check(string='baaaaaaaaaaaaaaaaaaaaaaaaaaa',
    correctAnswer='aaaaaaaaaaaaaaaaaaaaaaaaaaa');

const stop = new Date().getTime();

console.log(stop - start);
