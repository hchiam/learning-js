/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/98/design/562/
 * Stack that supports push/pop/top(peek) but also min in constant time.
 * Hint: NO NEED FOR A MIN HEAP! Can you store the min on the current element?
 */

/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []; // format: [{value, minUpToMe}, ...]
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  if (this.stack.length === 0) {
    this.stack.push({ value: x, minUpToMe: x });
  } else {
    const previousMin = this.stack[this.stack.length - 1].minUpToMe;
    const minUpToMe = Math.min(previousMin, x);
    this.stack.push({ value: x, minUpToMe: minUpToMe });
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop().value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].minUpToMe;
};

class BetterMinStack {
  constructor() {
    this.s = [];
    this.minStack = [];
  }
  push(n) {
    var len = this.minStack.length;
    if (len === 0 || n < this.minStack[len - 1]) {
      this.minStack.push(n);
    }
    this.s.push(n);
  }
  pop() {
    var output = this.s.pop();
    if (output === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return output;
  }
  top() {
    return this.s[this.s.length - 1];
  }
  getMin() {
    if (this.s.length === 0) return Infinity;
    return this.minStack[this.minStack.length - 1];
  }
}

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
  BetterMinStack,
};
