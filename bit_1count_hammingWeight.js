function hammingWeight(n) {
  if (n === 0) return 0;
  let ones = 0;
  while (n > 0) {
    if (n & 1) ones++; // count rightmost digit if it's a 1
    n = n >>> 1; // >>> is unsigned shift right, >> carries the sign
  }
  return ones;
}
