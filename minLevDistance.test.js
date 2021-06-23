/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./minLevDistance.js");

describe("the solution", () => {
  it("works", () => expect(solutionWrapper("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(solutionWrapper("abc", "def")).toStrictEqual(3));
  it("works", () => expect(solutionWrapper("a", "")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("a", "a")).toStrictEqual(0));
  it("works", () => expect(solutionWrapper("b", "a")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abc", "abc")).toStrictEqual(0));
});
