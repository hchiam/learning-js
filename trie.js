var TrieNode = function (value, isEndOfWord = false) {
  this.value = value;
  this.children = {};
  this.isEndOfWord = isEndOfWord;
};

var Trie = function () {
  const isEndOfWord = true;
  this.root = new TrieNode("", isEndOfWord);
};

Trie.prototype.insert = function (word) {
  let pointer = this.root;
  for (let c of word) {
    if (!(c in pointer.children)) {
      pointer.children[c] = new TrieNode(c);
    }
    pointer = pointer.children[c];
  }
  pointer.isEndOfWord = true;
};

Trie.prototype.search = function (word) {
  let pointer = this.root;
  for (let c of word) {
    if (!(c in pointer.children)) return false;
    pointer = pointer.children[c];
  }
  return pointer.isEndOfWord;
};

Trie.prototype.startsWith = function (prefix) {
  let pointer = this.root;
  for (let c of prefix) {
    if (!(c in pointer.children)) return false;
    pointer = pointer.children[c];
  }
  return true;
};

/**
 * Example usage:
 *
 * var obj = new Trie();
 * obj.insert(word);
 * var hasWord = obj.search(word);
 * var hasPrefix = obj.startsWith(prefix);
 */
