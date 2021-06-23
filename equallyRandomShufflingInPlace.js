// problem: https://leetcode.com/problems/shuffle-an-array/

// intuition behind the Fisher-Yates shuffle algorithm: https://eli.thegreenplace.net/2010/05/28/the-intuition-behind-fisher-yates-shuffling

/**
 * @param {number[]} numbers
 */
const Solution = function (numbers) {
  this.original = numbers;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const numbers = this.original.slice();
  // use Fisher-Yates shuffling algorithm:
  const length = this.original.length;
  /* eslint-disable require-jsdoc */
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  for (let i = 0; i < length; i++) {
    // random index from the elements still remaining in the "hat":
    const j = Math.floor(Math.random() * (length - i)) + i;
    swap(numbers, i, j);
  }
  return numbers;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(numbers)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const test = new Solution([1, 2, 3]);
console.log(test.shuffle());
console.log(test.reset());
console.log(test.shuffle());
