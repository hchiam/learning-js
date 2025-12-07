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

1) time O(n^c * c^2) space O(n c):
Brute force: generate all permutations (with repeats allowed), 
then check each answer. Maybe use a HT to avoid verifying repeated answers:
  time O(n^c * c^2), wspace O( space O(n c) for HT entries space O( space O(n c) for HT keys.
  But this is very slow!
  >> BCR = time O(nspace O( space O(n c), since must check/remember each word/letter at least once.

2) time O(n 26^cspace O( space O(n c):
Recursion backtracking, 
but vastly prune the backtracking with a prefix trie:
  Worst case time O(n 26^c c), wspace O( space O(n c n) if we store each word at each trie node.
  Worst case time O(n 26^c c), wspace O( space O(n c) if we store just wordIndex (index of words array) at each trie node.
  Loosely time O(nspace O( space O(n c) ≈ BCR!
  (The implementation below seems to be time O(n^2space O( space O(n c).)

3) time O(n 26^cspace O( space O(n c):
Recursion backtracking, 
but use a HT to speed things up (and slightly simplify the code):
  Worst case: time O(n 26^cspace O( space O(n c), so slightly < time O(n 26^c C), C to traverse trie.
  Loosely time O(nspace O( space O(n c) ≈ BCR!
  (The implementation below seems to be time O(n^2 cspace O( space O(n c).)

*/

function getWordSquares(words: string[]): string[][] {
  // time O(n^2 c) or time O(n^2 c^2)
  if (words[0].length === 1) {
    return [...words.map((w) => [w])]; // all 1-letter words --> all their own squares
  }

  const choicesCount = words[0].length;
  // const trie = buildTrie(words); // time O(n c)
  const ht = buildHashTable(words); // time O(n c^2)
  const output = [];
  for (let word of words) {
    // time O(n) -> time O(n^2 c) or time O(n^2 c^2)
    // need to get started with 1 word and 1 word count:
    const choices = [word];
    // backtrack(1, choicesCount, choices, words, output, trie); // time O(n c)
    backtrack(1, choicesCount, choices, words, output, ht); // time O(n c^2)
  }
  return output;
}

// function buildTrie(words: string[]): object { // time O(n c)
//     const trie = {};
//
//     for (let wordIndex in words) { // time O(n)
//         const word = words[wordIndex];
//         let pointer = trie;
//         for (let char of word) { // time O(c)
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

function buildHashTable(words: string[]): object {
  // time O(n c^2)
  const ht = {};
  for (let word of words) {
    // time O(n)
    for (let i = 0; i < word.length; i++) {
      // time O(c)
      const prefix = word.slice(0, Number(i) + 1); // technically time O(c)
      if (prefix in ht) {
        ht[prefix].push(word);
      } else {
        ht[prefix] = [word];
      }
    }
  }
  return ht;
}

function backtrack( // time O(n), but recursive
  count: number,
  choicesCount: number,
  choices: string[],
  words: string[],
  output: string[][],
  ht: object
): void {
  // trie: object): void
  if (count === choicesCount) {
    output.push([...choices]);
  } else {
    const i = count;
    const nextValidPrefix = getNextValidPrefix(i, choices); // time O(n)
    // const candidateWords: string[] = getWordsWithPrefix(nextValidPrefix, words, trie); // time O(n)
    const candidateWords: string[] = getWordsWithPrefix(
      nextValidPrefix,
      words,
      ht
    ); // time O(1)
    for (let word of candidateWords) {
      choices.push(word);
      backtrack(count + 1, choicesCount, choices, words, output, ht);
      choices.pop();
    }
  }
}

function getNextValidPrefix(i: number, choicesSoFar: string[]): string {
  // time O(n)
  let prefix = "";
  for (let word of choicesSoFar) {
    // time O(n)
    prefix += word[i];
  }
  return prefix;
}

// function getWordsWithPrefix(prefix: string, words: string[], trie: object): string[] { // time O(n)
function getWordsWithPrefix(
  prefix: string,
  words: string[],
  ht: object
): string[] {
  // time O(1)
  if (!prefix) return [];
  // let pointer = trie;
  // for (let char of prefix) { // time O(c)
  //     if (!(char in pointer)) return [];
  //     pointer = pointer[char];
  // }
  // return [...pointer['#'].map(wordIndex => words[wordIndex])]; // time O(n)
  return prefix in ht ? ht[prefix] : []; // time O(1)
}
