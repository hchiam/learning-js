
// to auto-run linter and console.log outputs upon file save:
// nodemon -x 'npm run lint; node index.js'

/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const sign = x < 0 ? -1 : 1;
  let output = 0;
  x = Math.abs(x);
  while (x > 0) {
    const lastDigit = x % 10;
    const shiftedDigits = output * 10;
    output = shiftedDigits + lastDigit;
    const removedLastDigit = Math.floor(x/10);
    x = removedLastDigit;
  }
  output = sign * parseInt(output);
  const isOverflowUpper = (output > 2147483647);
  const isOverflowLower = (output < -2147483648);
  if (isOverflowUpper || isOverflowLower) {
    return 0;
  }
  return output;
};

const t1 = typeof performance != 'undefined' ?
  performance.now() : new Date().getTime();
console.log(reverse(123) === 321);
console.log(reverse(120) === 21);
console.log(reverse(Math.pow(2, 31)) === 0);
console.log(reverse(-Math.pow(2, 31)) === 0);
console.log(reverse(0) === 0);
console.log(reverse(-123) === -321);
console.log(reverse(1534236469) === 0);
const t2 = typeof performance != 'undefined' ?
  performance.now() : new Date().getTime();
console.log(t2-t1);
