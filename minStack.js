/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/
 * Stack that supports push/pop/top(peek) but also min in constant time.
 * Hint: NO NEED FOR A MIN HEAP! Can you store the min on the current element?
 */

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this.stack = []; // format: [{value, minUpToMe}, ...]
};

/**
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  if (this.stack.length === 0) {
    this.stack.push({value: x, minUpToMe: x});
  } else {
    const previousMin = this.stack[this.stack.length - 1].minUpToMe;
    const minUpToMe = Math.min(previousMin, x);
    this.stack.push({value: x, minUpToMe: minUpToMe});
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  return this.stack.pop().value;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].value;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.stack[this.stack.length - 1].minUpToMe;
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

module.exports = {
  MinStack,
};
