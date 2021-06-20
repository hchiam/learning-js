/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./getSumWithoutPlusOrMinus.js");

describe("the solution", () => {
  it("works with no bits overlapping", () => {
    expect(solutionWrapper(1, 2)).toBe(3);
  });
  it("works with a bit overlapping", () => {
    expect(solutionWrapper(2, 3)).toBe(5);
  });
  it("works with many carries of bits", () => {
    expect(solutionWrapper(7, 1)).toBe(8);
  });
  it("works with negative numbers", () => {
    expect(solutionWrapper(-7, -1)).toBe(-8);
  });
  it("works with negative number + 0", () => {
    expect(solutionWrapper(-7, 0)).toBe(-7);
  });
  it("works with 0 + 0", () => {
    expect(solutionWrapper(0, 0)).toBe(0);
  });
});
