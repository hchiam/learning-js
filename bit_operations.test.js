const {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
  getBitsAsString,
} = require("./bit_operations.js");

describe("bit operations", () => {
  it("work", () => {
    expect(getBitsAsString(getBitI(5, 0))).toBe("1");
    expect(getBitsAsString(getBitI(5, 1))).toBe("0");
    expect(getBitsAsString(getBitI(5, 2))).toBe("1");
    expect(getBitsAsString(setBitI(5, 1))).toBe("111");
    expect(getBitsAsString(clrBitI(5, 2))).toBe("1");
    expect(getBitsAsString(clrBitI(5, 0))).toBe("100");
    expect(getBitsAsString(updateBitI(5, 1, 1))).toBe("111");
    expect(getBitsAsString(updateBitI(5, 2, 1))).toBe("101");
    expect(getBitsAsString(updateBitI(5, 2, 0))).toBe("1");
    expect(getBitsAsString(updateBitI(5, 1, 0))).toBe("101");
    expect(getBitsAsString(clrMsbToBitI(5, 1))).toBe("1");
    expect(getBitsAsString(clrBitIToLsb(5, 1))).toBe("100");
  });
});
