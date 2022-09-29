const {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
  getBitsAsString,
} = require("./bit_operations.js");

const { getNumberWithJustRightmost1BitSet } = require("./bit_rightmost_1.js");

describe("bit operations", () => {
  it("works", () => {
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

describe("getNumberWithJustRightmost1BitSet", () => {
  it("works", () => {
    expect(getNumberWithJustRightmost1BitSet(1)).toBe(1);
    expect(getNumberWithJustRightmost1BitSet(0)).toBe(0);
    expect(getNumberWithJustRightmost1BitSet(2)).toBe(0b10);
    expect(getNumberWithJustRightmost1BitSet(5)).toBe(0b001);
    expect(getNumberWithJustRightmost1BitSet(6)).toBe(0b10);
  });
});
