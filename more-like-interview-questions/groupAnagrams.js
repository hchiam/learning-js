/* eslint-disable require-jsdoc */

/**
 * @param {[string]} strings
 * @return {[[string]]}
 */
const groupAnagrams = (strings) => { // O(N s)
  if (strings.length === 0) return [[]];
  let output = [];
  const ht = new HT();
  // O(N s)
  for (let i = 0; i < strings.length; i++) { // O(N)
    ht.add(strings[i]); // O(s)
  }
  for (const key in ht.ht) { // O(N)
    if (key in ht.ht) { // O(1)
      if (output.length === 0) {
        output = [ht.ht[key]];
      } else {
        output.push(ht.ht[key]);
      }
    }
  }
  return output;
};


class HT {
  constructor() {
    this.ht = {};
  }

  add(string) { // O(s)
    const hashKey = this.getHashKey(string); // O(s)
    if (this.hasHashKey(hashKey)) { // O(1)
      this.ht[hashKey].push(string);
    } else {
      this.ht[hashKey] = [string];
    }
  }

  hasHashKey(hashKey) { // O(1)
    return hashKey in this.ht;
  }

  getHashKey(string) { // O(s)
    const letterCounts = {
      'a': 0,
      'b': 0,
      'c': 0,
      'd': 0,
      'e': 0,
      'f': 0,
      'g': 0,
      'h': 0,
      'i': 0,
      'j': 0,
      'k': 0,
      'l': 0,
      'm': 0,
      'n': 0,
      'o': 0,
      'p': 0,
      'q': 0,
      'r': 0,
      's': 0,
      't': 0,
      'u': 0,
      'v': 0,
      'w': 0,
      'x': 0,
      'y': 0,
      'z': 0,
    };
    for (let i = 0; i < string.length; i++) { // O(s)
      const letter = string[i];
      letterCounts[letter]++;
    }
    const keys = Object.keys(letterCounts);// O(1) (no sort O(s log s))
    let hashKey = '';
    for (let i = 0; i < keys.length; i++) { // O(1) = O(26)
      const letter = keys[i];
      const count = letterCounts[letter];
      if (count > 0) {
        hashKey += letter + count.toString();
      }
    }
    return hashKey;
  }
}


const check = (strings, correctAnswer) => {
  const response = groupAnagrams(strings);
  if (response.length !== correctAnswer.length) {
    console.log('different lengths',
        response.length + ' !== ' + correctAnswer.length);
    console.log(response, correctAnswer);
    return;
  }
  for (let i = 0; i < correctAnswer.length; i++) {
    for (let j = 0; j < correctAnswer[i].length; j++) {
      if (response[i][j] !== correctAnswer[i][j]) {
        console.log('error', response[i] + ' !== ' + correctAnswer[i]);
        console.log(response, correctAnswer);
        return;
      }
    }
  }
  console.log('ok');
};


const start = new Date().getTime();

check(string=[], correctAnswer=[[]]);
check(string=['a'], correctAnswer=[['a']]);
check(string=['a', 'b'], correctAnswer=[['a'], ['b']]);
check(string=['a', 'aa', 'b'], correctAnswer=[['a'], ['aa'], ['b']]);
check(string=['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
    correctAnswer=[
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
    ]);
check(string=['eat', 'tea', 'tan', 'ate', 'nat', 'bat', 'tee', 'ete'],
    correctAnswer=[
      ['eat', 'tea', 'ate'],
      ['tan', 'nat'],
      ['bat'],
      ['tee', 'ete'],
    ]);

const stop = new Date().getTime();

console.log(stop - start);
