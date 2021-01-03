/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./searchInRotatedSortedArray2.js");

describe("the solution", () => {
  it("works", () => {
    expect(solutionWrapper([4, 5, 6, 7, 0, 1, 2], 0)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([4, 5, 6, 7, 0, 1, 2], 3)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([0, 1, 2, 4, 5, 6, 7], 0)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([0, 1, 2, 4, 5, 6, 7], 7)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([], 7)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([2, 4, 5, 6, 7, 0, 1], 0)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 4, 5, 6, 7, 0, 1], 3)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([1, 2, 4], 0)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([1, 3], 0)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([1, 3], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([1, 3], 3)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([3, 1], 3)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([3, 1], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([3, 1], 0)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([5, 1, 2, 3, 4], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([1, 1, 1, 1, 1], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([1, 1, 1, 1, 1], 2)).toStrictEqual(false);
  });
  it("works", () => {
    expect(solutionWrapper([1, 1, 1, 1, 1, 1, 3, 1, 1], 3)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 5, 6, 0, 0, 1, 2], 0)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([1, 3], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([1, 3, 1, 1, 1], 3)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 3, 3, 3, 0, 1], 1)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([5, 1, 3], 3)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([10, 10, 10, 10, 2, 4, 8], 4)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 2, 2, 2, 2, 2, 0, 0, 0], 0)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 2, 2, 2, 2, 2, 0, 0, 0], 2)).toStrictEqual(true);
  });
  it("works", () => {
    expect(solutionWrapper([2, 2, 2, 2, 2, 2, 0, 0, 0], 1)).toStrictEqual(
      false
    );
  });
});
