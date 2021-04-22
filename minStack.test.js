/* eslint-disable require-jsdoc */

const { MinStack } = require("./minStack.js");

describe("the solution", () => {
  it("works", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    const min1 = minStack.getMin();
    const pop = minStack.pop();
    const top = minStack.top();
    const min2 = minStack.getMin();
    expect(min1).toStrictEqual(-3);
    expect(pop).toStrictEqual(-3);
    expect(top).toStrictEqual(0);
    expect(min2).toStrictEqual(-2);
  });
});
