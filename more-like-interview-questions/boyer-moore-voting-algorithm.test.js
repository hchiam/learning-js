/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./boyer-moore-voting-algorithm.js");

describe("the solution", () => {
  it("works", () => {
    expect(
      solutionWrapper([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 7, 7, 7, 7])
    ).toStrictEqual(7);
    expect(solutionWrapper()).toStrictEqual(null);
    expect(solutionWrapper([])).toStrictEqual(null);
    expect(solutionWrapper([7])).toStrictEqual(7);
    expect(solutionWrapper([7, 7])).toStrictEqual(7);
    expect(solutionWrapper([7, 1, 7])).toStrictEqual(7);
    expect(solutionWrapper([1, 7, 7])).toStrictEqual(7);
    expect(solutionWrapper([7, 7, 1])).toStrictEqual(7);
    expect(solutionWrapper([7, 7, 1, 2])).toStrictEqual(7);
    expect(solutionWrapper([1, 2, 7, 7])).toStrictEqual(7);
    expect(solutionWrapper([1, 7, 7, 7])).toStrictEqual(7);
    expect(solutionWrapper([1, 7, 2, 7, 7])).toStrictEqual(7);
    expect(solutionWrapper([1, 7, 7, 7, 2])).toStrictEqual(7);
    expect(solutionWrapper([1, 7, 7, 7, 1])).toStrictEqual(7);
  });
});
