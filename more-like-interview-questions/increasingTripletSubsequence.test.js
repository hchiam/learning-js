/* eslint-disable no-undef */
/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./increasingTripletSubsequence.js");

describe("increasing triplet subsequence", () => {
  it("handles strictly increasing array", () =>
    expect(solutionWrapper([1, 2, 3, 4, 5])).toStrictEqual(true));
  it("handles strictly decreasing array", () =>
    expect(solutionWrapper([5, 4, 3, 2, 1])).toStrictEqual(false));
  it("handles invalid input", () => {
    expect(solutionWrapper()).toStrictEqual(false);
    expect(solutionWrapper([])).toStrictEqual(false);
    expect(solutionWrapper([1, 2])).toStrictEqual(false);
    expect(solutionWrapper("not an array")).toStrictEqual(false);
    expect(solutionWrapper(1, 2, 3)).toStrictEqual(false);
  });
  it("handles sneaky edge case where mid might not be after min", () =>
    expect(solutionWrapper([2, 1, 3])).toStrictEqual(false));
  it("works on an example", () =>
    expect(solutionWrapper([5, 2, 4, 3, 1, 6])).toStrictEqual(true));
});
