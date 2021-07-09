const { findLength } = require("./dp-table-max-len-subarray.js");

describe("Dynamic Programming table for max length common subarray", () => {
  it("works on an example", () => {
    const actual = findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]);
    const expected = 3;
    expect(actual).toBe(expected);
  });
  it("works when all same value", () => {
    const actual = findLength([0, 0, 0, 0, 0], [0, 0, 0, 0, 0]);
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it("works when internal values are same but don't count", () => {
    const actual = findLength([2, 1, 1, 2], [2, 1, 1, 1, 1, 1, 2]);
    const expected = 3;
    expect(actual).toBe(expected);
  });
});
