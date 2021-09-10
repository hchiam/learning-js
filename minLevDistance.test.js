/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./minLevDistance.js");
const {
  minLevenshteinDistance_better: better,
} = require("./minLevenshteinDistance_better.js");

describe("the older solution", () => {
  it("works", () => expect(solutionWrapper("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(solutionWrapper("abc", "def")).toStrictEqual(3));
  it("works", () => expect(solutionWrapper("a", "")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("a", "a")).toStrictEqual(0));
  it("works", () => expect(solutionWrapper("b", "a")).toStrictEqual(1));
  it("works", () => expect(solutionWrapper("abc", "abc")).toStrictEqual(0));
});

describe("the better solution", () => {
  it("works", () => expect(better("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(better("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(better("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(better("abc", "def")).toStrictEqual(3));
  it("works", () => expect(better("a", "")).toStrictEqual(1));
  it("works", () => expect(better("a", "a")).toStrictEqual(0));
  it("works", () => expect(better("b", "a")).toStrictEqual(1));
  it("works", () => expect(better("abc", "abc")).toStrictEqual(0));
});
