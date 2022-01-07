/*

https://en.wikipedia.org/wiki/Word_square

e.g.:
      SATOR
      AREPO
      TENET
      OPERA
      ROTAS

Problem: Assuming you're allowed to repeat a word,
generate a list of all word squares from a given list of words (words are same length).

For Ot and Os below:
  n = number of words.
  c = number of characters in longest word.
  26 = all possible letters = max # of branches in recursion/backtracking call stack.

Ideas:

1) Ot(n^c * c^2) Os(n c):
Brute force: generate all permutations (with repeats allowed),
then check each answer. Maybe use a HT to avoid verifying repeated answers:
  Ot(n^c * c^2), with Os(n c) for HT entries and Os(n c) for HT keys.
  But this is very slow!
  >> BCR = Ot(n c) Os(n c), since must check/remember each word/letter at least once.

2) Ot(n 26^c c) Os(n c):
Recursion backtracking,
but vastly prune the backtracking with a prefix trie:
  Worst case Ot(n 26^c c), with Os(n c n) if we store each word at each trie node.
  Worst case Ot(n 26^c c), with Os(n c) if we store just wordIndex (index of words array) at each trie node.
  Loosely Ot(n c) Os(n c) ≈ BCR!
  (The implementation below seems to be Ot(n^2 c) Os(n c).)

3) Ot(n 26^c 1) Os(n c):
Recursion backtracking,
but use a HT to speed things up (and slightly simplify the code):
  Worst case: Ot(n 26^c 1) Os(n c), so slightly < Ot(n 26^c C), C to traverse trie.
  Loosely Ot(n c) Os(n c) ≈ BCR!
  (The implementation below seems to be Ot(n^2 c^2) Os(n c).)

*/
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
      to[j] = from[i];
    return to;
  };
function getWordSquares(words) {
  if (words[0].length === 1) {
    return __spreadArray(
      [],
      words.map(function (w) {
        return [w];
      })
    ); // all 1-letter words --> all their own squares
  }
  var choicesCount = words[0].length;
  // const trie = buildTrie(words); // Ot(n c)
  var ht = buildHashTable(words); // Ot(n c^2)
  var output = [];
  for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
    // Ot(n) -> Ot(n^2 c) or Ot(n^2 c^2)
    var word = words_1[_i];
    // need to get started with 1 word and 1 word count:
    var choices = [word];
    // backtrack(1, choicesCount, choices, words, output, trie); // Ot(n c)
    backtrack(1, choicesCount, choices, words, output, ht); // Ot(n c^2)
  }
  return output;
}
// function buildTrie(words: string[]): object { // Ot(n c)
//     const trie = {};
//
//     for (let wordIndex in words) { // Ot(n)
//         const word = words[wordIndex];
//         let pointer = trie;
//         for (let char of word) { // Ot(c)
//             if (char in pointer) {
//                 pointer = pointer[char];
//             } else {
//                 pointer[char] = {
//                     '#': []
//                 };
//                 pointer = pointer[char];
//             }
//             // pointer['#'].push(word);
//             pointer['#'].push(wordIndex);
//         }
//     }
//
//     return trie;
// }
function buildHashTable(words) {
  var ht = {};
  for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
    // Ot(n)
    var word = words_2[_i];
    for (var i = 0; i < word.length; i++) {
      // Ot(c)
      var prefix = word.slice(0, Number(i) + 1); // technically Ot(c)
      if (prefix in ht) {
        ht[prefix].push(word);
      } else {
        ht[prefix] = [word];
      }
    }
  }
  return ht;
}
function backtrack(count, choicesCount, choices, words, output, ht) { // Ot(n), but recursive
  if (count === choicesCount) {
    output.push(__spreadArray([], choices));
  } else {
    var i = count;
    var nextValidPrefix = getNextValidPrefix(i, choices); // Ot(n)
    // const candidateWords: string[] = getWordsWithPrefix(nextValidPrefix, words, trie); // Ot(n)
    var candidateWords = getWordsWithPrefix(nextValidPrefix, words, ht); // Ot(1)
    for (
      var _i = 0, candidateWords_1 = candidateWords;
      _i < candidateWords_1.length;
      _i++
    ) {
      var word = candidateWords_1[_i];
      choices.push(word);
      backtrack(count + 1, choicesCount, choices, words, output, ht);
      choices.pop();
    }
  }
}
function getNextValidPrefix(i, choicesSoFar) {
  var prefix = "";
  for (
    var _i = 0, choicesSoFar_1 = choicesSoFar;
    _i < choicesSoFar_1.length;
    _i++
  ) {
    // Ot(n)
    var word = choicesSoFar_1[_i];
    prefix += word[i];
  }
  return prefix;
}
// function getWordsWithPrefix(prefix: string, words: string[], trie: object): string[] { // Ot(n)
function getWordsWithPrefix(prefix, words, ht) {
  if (!prefix) return [];
  // let pointer = trie;
  // for (let char of prefix) { // Ot(c)
  //     if (!(char in pointer)) return [];
  //     pointer = pointer[char];
  // }
  // return [...pointer['#'].map(wordIndex => words[wordIndex])]; // Ot(n)
  return prefix in ht ? ht[prefix] : []; // Ot(1)
}
