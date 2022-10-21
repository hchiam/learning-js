const {
  productExceptSelf,
} = require("./productOfArrayExceptSelfWithoutDivision.js");

describe("productOfArrayExceptSelfWithoutDivision", () => {
  it("works", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    expect(
      productExceptSelf([-1, 1, 0, -3, 3]).map((x) =>
        Object.is(x, -0) ? 0 : x
      )
    ).toEqual([0, 0, 9, 0, 0]);
  });
});
