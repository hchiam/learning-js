/* eslint-disable require-jsdoc */

function topKFrequent(words, k) {
  // O(n log n):

  const sortedWords = words.sort();
  const ht = new Map(); // can be used instead of {}
  for (const word of sortedWords) {
    if (ht.get(word)) {
      ht.set(word, ht.get(word) + 1);
    } else {
      ht.set(word, 1);
    }
  }
  const keys = ht.keys();
  const arrayOfObjects = [];
  for (const key of keys) {
    arrayOfObjects.push({word: key, count: ht.get(key)});
  }
  const topK = arrayOfObjects.sort((a, b) => {
    if (a.count === b.count) {
      return a.word.localeCompare(b.word);
    }
    return b.count - a.count;
  }).slice(0, k);
  const output = topK.map((x) => x.word);
  return output;
}

module.exports = {
  topKFrequent,
};
