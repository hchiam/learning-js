// http://hchiam.blogspot.com/2019/03/random-visual-mnemonics-for-programming.html

function getBitI(n, i) {
  // "nacicci" but with double negative before it
  var singleBitButWithShift = n & (1 << i);
  var singleBit = !!singleBitButWithShift;
  return singleBit; // true or false
}

function setBitI(n, i) {
  // "nicicci"
  return n | (1 << i);
}

function clrBitI(n, i) {
  // "nancicci"
  return n & ~(1 << i);
}

function updateBitI(n, i, value) {
  // "nancicci icicci"
  // return (n & ~(1 << i)) | (value << i);
  if (value) {
    return setBitI(clrBitI(n, i), i);
  } else {
    return clrBitI(n, i);
  }
}

function clrMsbToBitI(n, i) {
  // "nacciccimi"
  return n & ((1 << i) - 1);
}

function clrBitIToLsb(n, i) {
  // "nacmiccipi"
  return n & (-1 << (i + 1));
}

function getBitsAsString(n) {
  if (typeof n === "boolean") {
    return n ? "1" : "0";
  }
  const positive32bit = n >>> 0;
  return positive32bit.toString(2);
}

function printBits(n) {
  console.log(getBitsAsString(n));
}

function log() {
  console.log(...arguments);
}

// log(getBitI(5, 0) === true);
// log(getBitI(5, 1) === false);
// log(getBitI(5, 2) === true);
// log(setBitI(5, 1) === 7);
// log(clrBitI(5, 2) === 1);
// log(clrBitI(5, 0) === 4);
// log(updateBitI(5, 1, 1) === 7);
// log(updateBitI(5, 2, 1) === 5);
// log(updateBitI(5, 2, 0) === 1);
// log(updateBitI(5, 1, 0) === 5);
// log(clrMsbToBitI(5, 1) === 1);
// log(clrBitIToLsb(5, 1) === 4);

/* --------------------------- */

// reference for even more bit functions: https://leetcode.com/problems/sum-of-two-integers/solutions/84278/A-summary:-how-to-use-bit-manipulation-to-solve-problems-easily-and-efficiently/

/**
 * 0x55555 "ODD" bits (index 0) are 1
 * (think 5 = 0x101) and extra 0x5's add 4 binary digits:
 * (0x55555).toString(2); // "1010101010101010101" <-- 1 here on the right
 */
function oddBitsMask101(fiveCount) {
  return Number("0x" + "5".repeat(fiveCount)); //.toString(2)
}

/**
 * 0xaaaaa "EVEN" bits (index 1) are 1
 * (think 5*2 = 0x1010) and extra 0xa's add 4 binary digits:
 * (0xaaaaa).toString(2) // "10101010101010101010" <-- 0 here on the right
 */
function evenBitsMask1010(aCount) {
  return Number("0x" + "a".repeat(aCount)); //.toString(2)
}

function union(a, b) {
  return a | b;
}
function intersection(a, b) {
  return a & b;
}
function subtraction(a, b) {
  return a & ~b;
}
function negation(n) {
  return ~n;
}
function getValueOfLast1Bit(n) {
  return n & -n;
} // 0b1010 --> 2
function clearLast1Bit(n) {
  return n & (n - 1);
} // 0b1010 --> 0b1000
function getAll1Bits() {
  return ~0;
}
function count1Bits(n) {
  // 0b1011 --> 3 (AKA Hamming weight)
  let count = 0;
  while (n) {
    n = clearLast1Bit(n);
    count++;
  }
  return count;
}
function isPowerOf4(n) {
  const hasOne1Digit = !clearLast1Bit(n);
  const isSingleDigitPowerOf4 = n & 0x55555555;
  return !!(hasOne1Digit && isSingleDigitPowerOf4);
}
// extra notes: https://www.geeksforgeeks.org/find-the-missing-number/
function getMissingNumberWithSum(arr) {
  // assumes [0, ..., n] and one missing
  const allSum = (arr.at(-1) * (1 + arr.at(-1))) / 2;
  return arr.reduce((c, e) => c - e, allSum);
}
function getMissingNumberWithXor(arr) {
  let output = 0;
  for (let i = 0; i < arr.length; i++) {
    output = output ^ i ^ arr[i]; // indices as numbers and existing numbers
  }
  output = output ^ arr.length ^ (arr.length + 1);
  // length = last number
  // length + 1 = need for missing number
  return output;
}

module.exports = {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
  getBitsAsString,
  printBits,
  log,

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
};
