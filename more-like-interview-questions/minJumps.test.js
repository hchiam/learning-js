/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./minJumps.js");

describe("index", () => {
  it("works", () => expect(solutionWrapper([])).toBe(0));
  it("works", () => expect(solutionWrapper([0])).toBe(0));
  it("works", () => expect(solutionWrapper([1])).toBe(0));
  it("works", () => expect(solutionWrapper([1, 1])).toBe(1));
  it("works", () => expect(solutionWrapper([5, 1])).toBe(1));
  it("works", () =>
    expect(solutionWrapper([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3])).toBe(4));
});
