/* eslint-disable require-jsdoc */

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/779/

/**
 * @param {string} string
 * @return {number}
 */
const lengthOfLongestSubstring = (string) => { // O(n)
  if (!string) return 0; // invalid/empty input
  if (string.length < 2) return string.length; // trivial cases
  // initialize for strings at least 2 characters long:
  let maxLength = 1;
  let tempLength = 1;
  let left = 0;
  let right = 1;
  const ht = new Map(); // hash table (for faster add/remove/has)
  ht.set(string[left], 1);
  // update current substring length and track characters seen
  while (right < string.length) {
    // move left pointer until have no more repeats of character at right
    while (ht.has(string[right]) && left < right) {
      ht.delete(string[left]);
      left++;
      tempLength--;
    }
    // track right character as part of substring
    ht.set(string[right], 1);
    right++;
    tempLength++;
    maxLength = Math.max(maxLength, tempLength);
  }
  return maxLength;
};


const check = (string, correctAnswer) => {
  const response = lengthOfLongestSubstring(string);
  if (response === correctAnswer) {
    console.log('ok');
  } else {
    console.log('error: ' + response + ' !== ' + correctAnswer, string);
  }
};


const start = new Date().getTime();

check(string=null, correctAnswer=0);
check(string='', correctAnswer=0);
check(string='a', correctAnswer=1);
check(string='ab', correctAnswer=2);
check(string='aa', correctAnswer=1);
check(string='aaa', correctAnswer=1);
check(string='abc', correctAnswer=3);
check(string='abb', correctAnswer=2);
check(string='aab', correctAnswer=2);
check(string='abcabcbb', correctAnswer=3);
check(string='bbbbb', correctAnswer=1);
check(string='pwwkew', correctAnswer=3);
check(string='abcadefghijkl', correctAnswer=12);

const stop = new Date().getTime();

console.log(stop - start);
