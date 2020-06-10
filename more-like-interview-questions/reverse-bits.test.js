/* eslint-disable require-jsdoc */

const { reverseBits } = require("./reverse-bits.js");

describe("the solution handles silly input", () => {
  it("works", () => {
    expect(reverseBits(0)).toStrictEqual(0);

    expect(reverseBits(0b11111111111111111111111111111111)).toStrictEqual(
      0b11111111111111111111111111111111
    );

    expect(reverseBits(0b11111111111111111111111111111101)).toStrictEqual(
      0b10111111111111111111111111111111
    );

    expect(reverseBits(0b11111111111111111111111111111101)).toStrictEqual(
      0b10111111111111111111111111111111
    );

    // missing digit:
    expect(
      reverseBits(0b1111111111111111111111111111100) ===
        0b0011111111111111111111111111111
    ).toBe(false);

    expect(reverseBits(0b01111111111111111111111111111100)).toStrictEqual(
      0b00111111111111111111111111111110
    );

    expect(reverseBits(0b11111111111111111111111111111111)).toStrictEqual(
      0b11111111111111111111111111111111
    );
  });
});
