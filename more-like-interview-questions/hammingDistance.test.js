/* eslint-disable require-jsdoc */

const {hammingDistance} = require('./hammingDistance.js');

describe('index', () => {
  it('works', () => {
    expect(hammingDistance(0, 0)).toBe(0);
    expect(hammingDistance(0, 1)).toBe(1);
    expect(hammingDistance(1, 0)).toBe(1);
    expect(hammingDistance(1, 1)).toBe(0);
    expect(hammingDistance(2, 1)).toBe(2);
    expect(hammingDistance(1, 4)).toBe(2);
    expect(hammingDistance(4, 1)).toBe(2);
    expect(hammingDistance(10, 1)).toBe(3);
  });
});
