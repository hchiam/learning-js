function factorial(num) {
  if (num === 0 || num === 1) return BigInt(1);
  const start = num - 1;
  num = BigInt(num);
  for (let i = start; i > 1; i--) {
    num *= BigInt(i);
  }
  return num;
}
