/* eslint-disable require-jsdoc */

const {
  solutionWrapper,
} = require("./dynamic-programming-table-coins-change.js");

describe("the solution", () => {
  it("works on a normal example", () =>
    expect(solutionWrapper([1, 2, 5], 11)).toStrictEqual(3));
  it("handles empty coin set", () =>
    expect(solutionWrapper([], 11)).toStrictEqual(-1));
  it("handles exact match", () =>
    expect(solutionWrapper([1], 1)).toStrictEqual(1));
  it("handles repeats", () => expect(solutionWrapper([1], 2)).toStrictEqual(2));
  it("handles none needed for 0", () =>
    expect(solutionWrapper([1], 0)).toStrictEqual(0));
  it("handles repeats and unused coins", () =>
    expect(solutionWrapper([1, 3], 2)).toStrictEqual(2));
  it("handles impossible sum", () =>
    expect(solutionWrapper([2, 3], 1)).toStrictEqual(-1));
  it("works for another example", () =>
    expect(solutionWrapper([2, 3, 4], 5)).toStrictEqual(2));
});
