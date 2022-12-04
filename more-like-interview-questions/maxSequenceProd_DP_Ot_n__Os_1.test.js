/* eslint-disable require-jsdoc */

const { maxProduct } = require("./maxSequenceProd_DP_Ot_n__Os_1.js");

describe("index", () => {
  it("works on [-2, -3, -4]", () => {
    expect(maxProduct([-2, -3, -4])).toBe(12);
  });
  it("works on [2, 3, -2, 4]", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });
  it("works on [-2, 2, 3, -2, 4, -1]", () => {
    expect(maxProduct([-2, 2, 3, -2, 4, -1])).toBe(96);
  });
  it("works on [-2, 0, -1]", () => {
    expect(maxProduct([-2, 0, -1])).toBe(0);
  });
  it("works on [-2, 3, -4]", () => {
    expect(maxProduct([-2, 3, -4])).toBe(24);
  });
});
