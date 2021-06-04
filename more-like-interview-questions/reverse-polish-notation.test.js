/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./reverse-polish-notation.js");

describe("the solution", () => {
  it("works on minimal cases", () => {
    let tokens = ["2", "1", "+"];
    let answer = 3;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);

    tokens = ["1", "1", "-"];
    answer = 0;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);

    tokens = ["2", "3", "*"];
    answer = 6;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);

    tokens = ["3", "2", "/"];
    answer = 1;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);
  });

  it("works on given example", () => {
    const tokens = ["2", "1", "+", "3", "*"];
    const answer = 9;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);
  });

  it("works when considering order matters", () => {
    const tokens = ["2", "1", "-", "3", "*"];
    const answer = 3;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);
  });

  it("works on bigger numbers", () => {
    const tokens = ["31", "11", "-", "17", "*"];
    const answer = 340;
    expect(solutionWrapper(tokens)).toStrictEqual(answer);
  });
});
