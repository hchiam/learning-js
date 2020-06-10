// to test this file: jest reverse-bits

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  return parseInt(
    Array.from(n.toString(2).padStart(32, "0")).reverse().join(""),
    2
  );
  /** the following would work in another language: (fails with 0b11111111111111111111111111111111) */
  // let o = ((n & 0x55555555) << 1) | ((n & 0xaaaaaaaa) >> 1);
  // o = ((o & 0x33333333) << 2) | ((o & 0xcccccccc) >> 2);
  // o = ((o & 0x0f0f0f0f) << 4) | ((o & 0xf0f0f0f0) >> 4);
  // o = ((o & 0x00ff00ff) << 8) | ((o & 0xff00ff00) >> 8);
  // o = ((o & 0x0000ffff) << 16) | ((o & 0xffff0000) >> 16);
  // return (o >>> 0).toString(2); // >>> 0 forces it to an unsigned integer
};

if (typeof module !== "undefined") {
  module.exports = {
    reverseBits,
  };
}

// console.log(reverseBits(0) === 0);
// console.log(
//   reverseBits(0b11111111111111111111111111111111) ===
//     0b11111111111111111111111111111111
// );
// console.log(
//   reverseBits(0b11111111111111111111111111111101) ===
//     0b10111111111111111111111111111111
// );
// console.log(
//   reverseBits(0b11111111111111111111111111111101) ===
//     0b10111111111111111111111111111111
// );
// console.log(
//   reverseBits(0b1111111111111111111111111111100) !== // missing digit
//     0b0011111111111111111111111111111
// );
// console.log(
//   reverseBits(0b01111111111111111111111111111100) ===
//     0b00111111111111111111111111111110
// );
// console.log(
//   reverseBits(0b11111111111111111111111111111111) ===
//     0b11111111111111111111111111111111
// );
