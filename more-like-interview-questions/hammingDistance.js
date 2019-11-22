/* eslint-disable require-jsdoc */

function hammingDistance(x, y) {
  let count = 0;
  while (x !== y) {
    const xBitR = x & 1;
    const yBitR = y & 1;
    count += xBitR ^ yBitR;
    x = x >> 1;
    y = y >> 1;
  }
  return count;
}

module.exports = {
  hammingDistance,
};
