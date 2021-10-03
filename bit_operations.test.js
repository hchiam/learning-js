const {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
} = require("./bit_operations.js");

describe("bit operations", () => {
  it("work", () => {
    expect(getBitI(5, 0)).toBe(true);
    expect(getBitI(5, 1)).toBe(false);
    expect(getBitI(5, 2)).toBe(true);
    expect(setBitI(5, 1)).toBe(7);
    expect(clrBitI(5, 2)).toBe(1);
    expect(clrBitI(5, 0)).toBe(4);
    expect(updateBitI(5, 1, 1)).toBe(7);
    expect(updateBitI(5, 2, 1)).toBe(5);
    expect(updateBitI(5, 2, 0)).toBe(1);
    expect(updateBitI(5, 1, 0)).toBe(5);
    expect(clrMsbToBitI(5, 1)).toBe(1);
    expect(clrBitIToLsb(5, 1)).toBe(4);
  });
});
