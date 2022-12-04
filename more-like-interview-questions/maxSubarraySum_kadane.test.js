const { maxSubArray } = require("./maxSubarraySum_kadane");

describe("maxSubArray sum", () => {
  it("[-2,1,-3,4,-1,2,1,-5,4]", () => {
    const actual = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    const expected = 6;
    expect(actual).toBe(expected);
  });
  it("[1]", () => {
    const actual = maxSubArray([1]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it("[5,4,-1,7,8]", () => {
    const actual = maxSubArray([5, 4, -1, 7, 8]);
    const expected = 23;
    expect(actual).toBe(expected);
  });
  it("[-2,-1]", () => {
    const actual = maxSubArray([-2, -1]);
    const expected = -1;
    expect(actual).toBe(expected);
  });
});
