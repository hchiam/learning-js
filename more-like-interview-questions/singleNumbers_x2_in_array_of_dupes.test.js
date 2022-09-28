/* eslint-disable require-jsdoc */

const { solutionWrapper } = require("./singleNumbers_x2_in_array_of_dupes.js");

describe("the solution", () => {
  it("works", () => {
    expect(solutionWrapper([1, 2, 1, 3, 2, 5])).toStrictEqual([3, 5]);
  });
});

describe("the solution", () => {
  it("works", () => {
    expect(solutionWrapper([-1, 0])).toStrictEqual([-1, 0]);
  });
});

describe("the solution", () => {
  it("works", () => {
    expect(solutionWrapper([0, 1])).toStrictEqual([0, 1]);
  });
});

describe("the solution", () => {
  it("works", () => {
    expect(
      solutionWrapper([
        1193730082, 587035181, -814709193, 1676831308, -511259610, 284593787,
        -2058511940, 1970250135, -814709193, -1435587299, 1308886332,
        -1435587299, 1676831308, 1403943960, -421534159, -528369977,
        -2058511940, 1636287980, -1874234027, 197290672, 1976318504, -511259610,
        1308886332, 336663447, 1636287980, 197290672, 1970250135, 1976318504,
        959128864, 284593787, -528369977, -1874234027, 587035181, -421534159,
        -786223891, 933046536, 959112204, 336663447, 933046536, 959112204,
        1193730082, -786223891,
      ])
    ).toStrictEqual([1403943960, 959128864]);
  });
});
