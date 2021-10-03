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

// function log() {
//   console.log(...arguments);
// }
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

module.exports = {
  getBitI,
  setBitI,
  clrBitI,
  updateBitI,
  clrMsbToBitI,
  clrBitIToLsb,
};
