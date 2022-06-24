/* eslint-disable no-undef */

const { lowestIndexSameAsValue } = require("./lowestIndexSameAsValue");

describe("lowestIndexSameAsValue", () => {
  it("works when only first index is valid", () => {
    const actual = lowestIndexSameAsValue([0, 2, 3, 4, 5, 6]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it("works when only last index is valid", () => {
    const actual = lowestIndexSameAsValue([-1, 0, 1, 2, 3, 5]);
    const expected = 5;
    expect(actual).toBe(expected);
  });
  it("works when all are valid but only index 0 should be returned", () => {
    const actual = lowestIndexSameAsValue([0, 1, 2, 3, 4, 5]);
    const expected = 0;
    expect(actual).toBe(expected);
  });
  it("makes sure the skip size doesn't stop at index 0 when it still needs to make a smaller jump", () => {
    const actual = lowestIndexSameAsValue([-1, 1, 3, 4, 5, 6]);
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it("makes sure to keep trying the same skip size (index 3: -3, +1, +1)", () => {
    const actual = lowestIndexSameAsValue([-1, 0, 2, 4, 5, 6]);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});
