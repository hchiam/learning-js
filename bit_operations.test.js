const {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
  getBitsAsString,

  oddBitsMask101,
  evenBitsMask1010,
  union,
  intersection,
  subtraction,
  negation,
  getValueOfLast1Bit,
  clearLast1Bit,
  getAll1Bits,
  count1Bits,
  isPowerOf4,
  getMissingNumberWithSum,
  getMissingNumberWithXor,
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

    expect(getBitsAsString(oddBitsMask101(3))).toBe("10101010101");
    expect(getBitsAsString(evenBitsMask1010(2))).toBe("10101010");
    expect(getBitsAsString(union(0b1010, 0b0101))).toBe("1111");
    expect(getBitsAsString(intersection(0b1010, 0b0111))).toBe("10");
    expect(getBitsAsString(subtraction(0b1010, 0b0010))).toBe("1000");
    expect(getBitsAsString(subtraction(0b1010, 0b0111))).toBe("1000");
    expect(getBitsAsString(negation(0b10110))).toBe(
      "11111111111111111111111111101001"
    );
    expect(getBitsAsString(getValueOfLast1Bit(0b0100))).toBe("100");
    expect(getBitsAsString(clearLast1Bit(0b1010))).toBe("1000");
    expect(getAll1Bits()).toBe(-1);
    expect(count1Bits(0b10011010)).toBe(4);
    expect(isPowerOf4(1)).toBe(true);
    expect(isPowerOf4(2)).toBe(false);
    expect(isPowerOf4(3)).toBe(false);
    expect(isPowerOf4(4)).toBe(true);
    expect(isPowerOf4(5)).toBe(false);
    expect(isPowerOf4(8)).toBe(false);
    expect(isPowerOf4(16)).toBe(true);
    expect(getMissingNumberWithSum([1, 3, 4])).toBe(2);
    expect(getMissingNumberWithSum([1, 2, 4])).toBe(3);
    expect(getMissingNumberWithXor([1, 3, 4])).toBe(2);
    expect(getMissingNumberWithXor([1, 2, 4])).toBe(3);
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
