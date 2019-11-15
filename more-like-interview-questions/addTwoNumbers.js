// nodemon -x 'npm run lint; node index.js'

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  const output = new ListNode();
  let p1 = l1;
  let p2 = l2;
  let p3 = output;
  let carry = 0;
  while (p1 && p2) {
    const sum = p1.val + p2.val + carry;
    const digit = sum % 10;
    carry = (sum > 9) ? 1 : 0;
    p3.val = digit;
    p1 = p1.next;
    p2 = p2.next;
    if (p1 && p2) {
      p3.next = new ListNode();
      p3 = p3.next;
    }
  }
  let p = p1 || p2;
  if (p) {
    p3.next = new ListNode();
    p3 = p3.next;
  }
  while (p) {
    const sum = p.val + carry;
    const digit = sum % 10;
    carry = (sum > 9) ? 1 : 0;
    p3.val = digit;
    p = p.next;
    if (p) {
      p3.next = new ListNode();
      p3 = p3.next;
    }
  }
  if (carry) {
    p3.next = new ListNode(carry);
  }
  return output;
};

/**
 * Definition for singly-linked list.
 * @param {number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const check = (input, correctAnswer) => {
  const response = addTwoNumbers(...input);
  // console.log(response);
  // console.log(correctAnswer);
  const ok = checkRecursively(response, correctAnswer);
  if (ok) {
    console.log('ok');
  } else {
    console.log('error: ' + JSON.stringify(response) +
        ' !== ' + JSON.stringify(correctAnswer) +
        '\ninput: ' + JSON.stringify(input));
  }
  console.log('');
};

const checkRecursively = (input, correctAnswer) => {
  if (input === null && correctAnswer === null) return true;
  if (xorCheck(input, correctAnswer)) return false;

  if (input.val != correctAnswer.val) return false;

  if (input.next === null && correctAnswer.next === null) return true;
  if (xorCheck(input.next, correctAnswer.next)) return false;

  return checkRecursively(input.next, correctAnswer.next);
};

const xorCheck = (a, b) => {
  return (a && !b) || (!a && b);
};

const start = new Date().getTime();

let output;
let a = new ListNode(0);
let b = new ListNode(0);
check(input=[a, b], correctAnswer=new ListNode(0));

a = new ListNode(1);
b = new ListNode(2);
check(input=[a, b], correctAnswer=new ListNode(3));

a = new ListNode(1);
b = new ListNode(0);
check(input=[a, b], correctAnswer=new ListNode(1));

a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(1);
b = new ListNode(1);
output = new ListNode(2);
output.next = new ListNode(1);
output.next.next = new ListNode(1);
check(input=[a, b], correctAnswer=output);

a = new ListNode(9);
b = new ListNode(1);
output = new ListNode(0);
output.next = new ListNode(1);
check(input=[a, b], correctAnswer=output);

a = new ListNode(1);
b = new ListNode(9);
output = new ListNode(0);
output.next = new ListNode(1);
check(input=[a, b], correctAnswer=output);

a = new ListNode(9);
b = new ListNode(9);
output = new ListNode(8);
output.next = new ListNode(1);
check(input=[a, b], correctAnswer=output);

a = new ListNode(0);
a.next = new ListNode(1);
b = new ListNode(0);
output = new ListNode(0);
output.next = new ListNode(1);
check(input=[a, b], correctAnswer=output);

a = new ListNode(2);
a.next = new ListNode(4);
a.next.next = new ListNode(3);
b = new ListNode(5);
b.next = new ListNode(6);
b.next.next = new ListNode(4);
output = new ListNode(7);
output.next = new ListNode(0);
output.next.next = new ListNode(8);
check(input=[a, b], correctAnswer=output);

const stop = new Date().getTime();

console.log(stop - start);
