// https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/

// more efficient would be to avoid Object.keys: https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/discuss/532747/JavaScript

/**
 * RandomizedSet simply uses one hash table,
 *
 * but RandomizedSet2 really pushes time complexity to O(1)
 * by avoiding using Object.keys,
 * but this requires extra memory space to store and update an array.
 */

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
  if (keys.length < 1) return null;
  const randomNumber = getRandomInteger(0, keys.length);
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

// more efficient would be to avoid Object.keys: https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/discuss/532747/JavaScript

var RandomizedSet2 = function () {
  this.set = {};
  this.values = [];
};

RandomizedSet2.prototype.insert = function (val) {
  const hadAlready = val in this.set;
  if (!hadAlready) {
    this.set[val] = this.values.length;
    this.values.push(val);
  }
  return !hadAlready;
};

RandomizedSet2.prototype.remove = function (val) {
  const hadAlready = val in this.set;
  const indexOfRemoved = this.set[val];
  if (hadAlready) {
    delete this.set[val];
    const lastValueAdded = this.values.pop();
    const wasLastValueAdded = this.values.length === indexOfRemoved;
    if (!wasLastValueAdded) {
      /**
       * example:
       *
       * {0:0, 1:1, 2:2} [0,1,2] remove 1
       * {0:0, 2:2} [0,1]
       * indexOfRemoved = 1, lastValueAdded = 2
       * {0:0, 2:1} [0,2]
       */

      // make use of the now-unused index:

      // update "= index" of last value added to make use of the unused index
      this.set[lastValueAdded] = indexOfRemoved;
      // update "[index]" of last value added to make use of the unused index
      this.values[indexOfRemoved] = lastValueAdded;
    }
  }

  return hadAlready;
};

RandomizedSet2.prototype.getRandom = function () {
  if (this.values.length === 0) return null;
  return this.values[Math.floor(Math.random() * this.values.length)];
};

module.exports = {
  RandomizedSet,
  RandomizedSet2,
  getRandomInteger,
};
