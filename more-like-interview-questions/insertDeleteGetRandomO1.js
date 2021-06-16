// https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/discuss/532747/JavaScript

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.set = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const hadAlready = val in this.set;
  if (!hadAlready) this.set[val] = true;
  return !hadAlready;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const hadAlready = val in this.set;
  delete this.set[val];
  return hadAlready;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const keys = Object.keys(this.set);
  const randomNumber = getRandomInteger(0, keys.length - 1);
  const key = keys[randomNumber];
  return Number(key);
};

function getRandomInteger(min, maxExclusive) {
  min = Math.ceil(min);
  maxExclusive = Math.floor(maxExclusive);
  var delta = maxExclusive - min;
  return Math.floor(Math.random() * delta) + min;
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = {
  RandomizedSet,
};
