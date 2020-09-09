// https://medium.com/javascript-in-plain-english/javascript-optimizations-tail-call-optimization-tco-471b4f8e4f37
function factorial(n, total = 1) {
  console.trace();
  if (n === 0) {
    return total;
  }
  // proper tail call: (return just final function output -> can do optimization: basically no stack!)
  return factorial(n - 1, n * total);
}
factorial(2);
