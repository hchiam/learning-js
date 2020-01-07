/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = (x) => {
//   if (x < 0) return false;
//   if (x >= 0 && x < 10) return true;
//   let str = String(x);
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) return false;
//     left++;
//     right--;
//   }
//   return true;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  if (x >= 0 && x < 10) return true;
  // need this check to account for 100 etc not working in the loop:
  if (x % 10 === 0 && x !== 0) return false; // last digit is 0
  let shrinking = x;
  let backwards = 0;
  while (shrinking > backwards) { // will loop to half the number + 1
    const digit = shrinking % 10;
    backwards = backwards * 10 + digit;
    shrinking = removeLastDigit(shrinking);
  }
  // 1221 -> 122, 1 -> 12, 12 ! stop: equal so true
  // 121 -> 12, 1 -> 1, 12 ! stop: not equal but still true: 1 = (12 - (12 % 10)) / 10
  // 123 -> 12, 3 -> 1, 32 ! stop: not equal and false
  if (backwards === shrinking) return true;
  const backwardsMinusMiddleDigit = removeLastDigit(backwards);
  return (backwardsMinusMiddleDigit === shrinking);

  function removeLastDigit(number) {
    return (number - (number % 10)) / 10;
  }
};

console.log(isPalindrome(121) === true ? 'ok' : 'error');
console.log(isPalindrome(-121) === false ? 'ok' : 'error');
console.log(isPalindrome(10) === false ? 'ok' : 'error');
console.log(isPalindrome(1221) === true ? 'ok' : 'error');
console.log(isPalindrome(123) === false ? 'ok' : 'error');
console.log(isPalindrome(100) === false ? 'ok' : 'error');
console.log(isPalindrome(122) === false ? 'ok' : 'error');
