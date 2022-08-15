const { singleNumber } = require("./twoUniqueUnpairedNumbers.js");

describe("2 unique unpaired numbers in Ot(n) Os(1)", () => {
  it("works", () => {
    expect(singleNumber([1, 2, 1, 3, 2, 5]).sort()).toEqual([3, 5]);
    expect(singleNumber([-1, 0]).sort()).toEqual([-1, 0]);
    expect(singleNumber([0, 1]).sort()).toEqual([0, 1]);
  });
  it("works on examples trying to break the rightMost1 groupings", () => {
    expect(singleNumber([1, 1, 2, 6]).sort()).toEqual([2, 6]);
    expect(singleNumber([2, 6, 14, 14]).sort()).toEqual([2, 6]);
  });
});
