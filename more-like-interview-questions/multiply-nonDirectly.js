/* eslint-disable require-jsdoc */

const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0';
  const output = [];
  const multiplicationRows = [];
  let carry = 0;
  let product = 0;
  const n1 = num1.split('').reverse();
  const n2 = num2.split('').reverse();
  // get multiplication rows
  for (let i = 0; i < n1.length; i++) {
    carry = 0;
    multiplicationRows[i] = [];
    for (let k = 0; k < i; k++) {
      multiplicationRows[i].push(0);
    }
    for (let j = 0; j < n2.length; j++) {
      const a = parseInt(n1[i]);
      const b = parseInt(n2[j]);
      product = a * b + carry;
      carry = (product - (product % 10)) / 10; // tens place digit
      product = product % 10; // ones place digit
      multiplicationRows[i].push(product);
    }
    if (carry) multiplicationRows[i].push(carry);
  }
  // get max row length
  let maxRowLength = 1;
  for (let i = 0; i < multiplicationRows.length; i++) {
    const rowLength = multiplicationRows[i].length;
    maxRowLength = Math.max(maxRowLength, rowLength);
  }
  // make all rows the same length
  for (let i = 0; i < multiplicationRows.length; i++) {
    const toFill = maxRowLength - multiplicationRows[i].length;
    const len = multiplicationRows[i].length;
    for (let j = 0; j < toFill; j++) {
      multiplicationRows[i][len + j] = 0;
    }
    // multiplicationRows[i].length = maxRowLength;
    // multiplicationRows[i] = multiplicationRows[i].map((v) => isNaN(v) ? 0 : v);
  }
  // add up multiplication rows
  carry = 0;
  for (let digitIndex = 0; digitIndex < maxRowLength; digitIndex++) {
    let digitSum = carry;
    for (let rowIndex = 0; rowIndex < multiplicationRows.length; rowIndex++) {
      digitSum += multiplicationRows[rowIndex][digitIndex];
    }
    carry = (digitSum - (digitSum % 10)) / 10;
    digitSum = digitSum % 10;
    output[digitIndex] = digitSum;
  }
  if (carry) output.push(carry);
  // reverse order of digits
  return output.reverse().join('');
};

function solutionWrapper(a, b) {
  return multiply(a, b);
}

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

module.exports = {
  solutionWrapper,
};
