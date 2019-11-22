/* eslint-disable require-jsdoc */

function topKFrequent(words, k) {
  const sortedWords = words.sort();
  const ht = {};
  for (const word of sortedWords) {
    if (word in ht) {
      ht[word]++;
    } else {
      ht[word] = 1;
    }
  }
  const keys = Object.keys(ht);
  const arrayOfObjects = [];
  for (const key of keys) {
    arrayOfObjects.push({word: key, count: ht[key]});
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
