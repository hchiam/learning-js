// https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/

/**
 * This file contains 2 solutions:  RandomizedSet and RandomizedSet2:
 *
 * RandomizedSet simply uses one hash table,
 *
 * but RandomizedSet2 (based off of https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/discuss/532747/JavaScript)
 * really pushes the time complexity to O(1)
 * by avoiding using Object.keys and the "in" keyword, to avoid inherent looping by using an array,
 * but this approach requires extra memory space and code to store and update that array.
 *
 * The array helps, because you might as well store indices for the values in the hash table (key:value, value=?),
 * so store array indices in the hash table that match up with the array.
 * The indices in the hash table will help to find in O(1) time where the item to remove is in the array.
 *
 * And then the only surprising logic is when the item you're removing
 * just happens to not be the last one in the array (as detected by comparing with the array's last element),
 * in which case a "gap" is created in the array where you removed an item,
 * which breaks the usefulness of the array,
 * so to fix that, you can "fill" that gap in the array with the last item in the array,
 * and make use of the index stored in the hash table for the index of the array that is now a "gap",
 * and update the hash table (which maps values to the array's indices) to match the updated array.
 *
 * For example:
 *
 * {0:0, 1:1, 2:2, 3:3} [0,1,2,3] remove 1
 * {0:0, 2:2, 3:3} [0,1,2,_] (need to update/correct the array, to remove 1)
 * indexOfRemoved = 1, lastValueAdded = 3
 * {0:0, 2:2, 3:1} [0,3,2] (fix the array, update hash table to match array)
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

// avoid Object.keys: https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/813/discuss/532747/JavaScript

var RandomizedSet2 = function () {
  this.set = {};
  this.values = [];
};

RandomizedSet2.prototype.insert = function (val) {
  const hadAlready = this.set[val] !== undefined;
  if (!hadAlready) {
    this.set[val] = this.values.length;
    this.values.push(val);
  }
  return !hadAlready;
};

RandomizedSet2.prototype.remove = function (val) {
  const hadAlready = this.set[val] !== undefined;
  const indexOfRemoved = this.set[val];
  if (hadAlready) {
    delete this.set[val];
    const lastValueAdded = this.values.pop();
    const wasLastItemInTheArray = this.values.length === indexOfRemoved;
    if (!wasLastItemInTheArray) {
      // you need to handle the case when the item you removed isn't the last one in the array:

      /**
       * For example:
       *
       * {0:0, 1:1, 2:2, 3:3} [0,1,2,3] remove 1
       * {0:0, 2:2, 3:3} [0,1,2,_] (need to update/correct the array, to remove 1)
       * indexOfRemoved = 1, lastValueAdded = 3
       * {0:0, 2:2, 3:1} [0,3,2] (fix the array, update hash table to match array)
       */

      // make use of the now-unused index:

      // update "[index]" of last value added to make use of the unused index
      this.values[indexOfRemoved] = lastValueAdded; // array "gap" filled

      // update "= index" of last value added to make use of the unused index
      this.set[lastValueAdded] = indexOfRemoved; // hash table updated to match array
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
