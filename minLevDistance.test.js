/* eslint-disable require-jsdoc */

// O(3^(nm)) time, O(nm) space
const { minLevDistance: older } = require("./minLevDistance.js");

const {
  // O(nm) time, O(m) space
  minLevenshteinDistance_evenBetter: evenBetter,
  // O(nm) time, O(nm) space
  minLevenshteinDistance_better: better,
} = require("./minLevenshteinDistance_better.js");

describe("the older solution with O(3^(nm)) time, O(nm) space", () => {
  it("works", () => expect(older("", "")).toStrictEqual(0));
  it("works", () => expect(older("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(older("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(older("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(older("abc", "def")).toStrictEqual(3));
  it("works", () => expect(older("a", "")).toStrictEqual(1));
  it("works", () => expect(older("a", "a")).toStrictEqual(0));
  it("works", () => expect(older("b", "a")).toStrictEqual(1));
  it("works", () => expect(older("abc", "abc")).toStrictEqual(0));
});

describe("the better solution with O(nm) time, O(n) space", () => {
  it("works", () => expect(better("", "")).toStrictEqual(0));
  it("works", () => expect(better("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(better("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(better("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(better("abc", "def")).toStrictEqual(3));
  it("works", () => expect(better("a", "")).toStrictEqual(1));
  it("works", () => expect(better("a", "a")).toStrictEqual(0));
  it("works", () => expect(better("b", "a")).toStrictEqual(1));
  it("works", () => expect(better("abc", "abc")).toStrictEqual(0));
});

describe("the even better solution with O(nm) time, O(m) space", () => {
  it("works", () => expect(evenBetter("", "")).toStrictEqual(0));
  it("works", () => expect(evenBetter("abc", "abd")).toStrictEqual(1));
  it("works", () => expect(evenBetter("abcd", "abd")).toStrictEqual(1));
  it("works", () => expect(evenBetter("abcde", "abd")).toStrictEqual(2));
  it("works", () => expect(evenBetter("abc", "def")).toStrictEqual(3));
  it("works", () => expect(evenBetter("a", "")).toStrictEqual(1));
  it("works", () => expect(evenBetter("a", "a")).toStrictEqual(0));
  it("works", () => expect(evenBetter("b", "a")).toStrictEqual(1));
  it("works", () => expect(evenBetter("abc", "abc")).toStrictEqual(0));
});
