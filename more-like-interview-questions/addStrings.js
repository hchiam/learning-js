/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = (num1, num2) => {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  let backwardsAnswer = [];
  let carry = 0;
  // main addition code here:
  while (p1 >= 0 && p2 >= 0) {
    const sum = parseInt(num1[p1]) + parseInt(num2[p2]) + carry;
    carry = sum - (sum % 10); // 10 or 0
    const sumDigit = sum - carry;
    carry /= 10; // 1 or 0
    backwardsAnswer.push(sumDigit);
    p1--;
    p2--;
  }
  // handle remaining digits:
  while (p1 >= 0) {
    const sum = parseInt(num1[p1]) + carry;
    carry = sum - (sum % 10); // 10 or 0
    const sumDigit = sum - carry;
    carry /= 10; // 1 or 0
    backwardsAnswer.push(sumDigit);
    p1--;
  }
  while (p2 >= 0) {
    const sum = parseInt(num2[p2]) + carry;
    carry = sum - (sum % 10); // 10 or 0
    const sumDigit = sum - carry;
    carry /= 10; // 1 or 0
    backwardsAnswer.push(sumDigit);
    p2--;
  }
  // account for potentially remaining carry:
  if (carry > 0) backwardsAnswer.push(carry);
  // final answer:
  backwardsAnswer.reverse();
  return backwardsAnswer.join('').toString();
};

console.log(addStrings('9', '1'));
console.log(addStrings('19', '1'));
console.log(addStrings('1989', '1'));
console.log(addStrings('199999', '1'));
