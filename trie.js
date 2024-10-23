/*
TODO: test this class implementation:
TODO: test this class implementation:
TODO: test this class implementation:

class TrieNode {
    constructor(val, isEndOfWord) {
        this.val = val;
        this.isEndOfWord = isEndOfWord;
        this.next = {};
    }
}

class Trie {
    constructor() {
        this.trie = new TrieNode('', true);
    }
    add(word) {
        let p = this.trie;
        for (let letter of word) {
            if (!(letter in p.next)) {
                p.next[letter] = new TrieNode(letter, false);
            }
            p = p.next[letter];
        }
        p.isEndOfWord = true;
    }
    find(word) {
        if (!word) return true;
        let p = this.trie;
        for (let letter of word) {
            if (!(letter in p.next)) return false;
            p = p.next[letter];
        }
        return p.isEndOfWord;
    }
}
*/

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
