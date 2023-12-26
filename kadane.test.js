const { maxSumSubarray } = require("./kadane.js");

describe("Kadane's algorithm", () => {
  it("works to get the contiguous subarray with max sum", () => {
    const actual = maxSumSubarray([4, -1, 2, -7, 3, 4]);
    const expected = [3, 4];
    expect(actual).toStrictEqual(expected);
  });
  it("works on single negative number", () => {
    const actual = maxSumSubarray([-2]);
    const expected = [-2];
    expect(actual).toStrictEqual(expected);
  });
  it("works on all negative numbers", () => {
    const actual = maxSumSubarray([-2, -1, -3, -4]);
    const expected = [-1];
    expect(actual).toStrictEqual(expected);
  });
  it("works on all negative numbers and one 0", () => {
    const actual = maxSumSubarray([-2, -1, 0, -3, -4]);
    const expected = [0];
    expect(actual).toStrictEqual(expected);
  });
});
