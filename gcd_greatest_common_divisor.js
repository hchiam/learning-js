/**
 * TO RUN THIS FILE IN CLI:
 * node gcd_greatest_common_divisor.js
 */
function gcd(x, y, callback) {
  if (x === 0 || y === 0) return console.log("!!!CANNOT GET GCD OF 0!!!");

  return recurse(x, y);
  function recurse(x, y) {
    callback?.(x, y);

    const hadNoRemainder = x === 0;
    if (hadNoRemainder) return y;

    /**
     * If you can factor the smaller term and the remainder (i.e. difference in factoring x into y),
     * then you can factor the bigger term and the smaller term.
     *
     * GCD(x, y) = GCD(y - x, x) if y > x
     */
    const newRemainder = y % x;
    const newThingToFactor = x;
    return recurse(newRemainder, newThingToFactor); // also auto-swaps to get (small, big)
  }
}

example();

function example() {
  log(0, 0);
  log(3, 9);
  log(3, 27);
  log(3, 3);
  log(3, 10);
  log(26, 12);

  log(24, 18);
  log(24, 9);
}

function log(x, y) {
  console.log(`Getting GCD of ${x} and ${y}:`);
  console.log(gcd(x, y, callback));
}

function callback(x, y) {
  // console.log(x, y, "remainder", y % x);
}
