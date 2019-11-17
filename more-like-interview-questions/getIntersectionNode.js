// nodemon -x 'npm run lint; node index.js'

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;
  let pA = headA;
  let pB = headB;
  const aValues = [];
  const bValues = [];
  while (pA) {
    aValues.push(pA.val);
    pA = pA.next;
  }
  while (pB) {
    bValues.push(pB.val);
    pB = pB.next;
  }
  const aLen = aValues.length;
  const bLen = bValues.length;
  const shorterLength = Math.min(aLen, bLen);
  const neverSame = (aValues[aLen-1] !== bValues[bLen-1]);
  if (neverSame) return null;
  let stepsFromEnd = null;
  for (let i = 0; i < shorterLength; i++) {
    const match = aValues[aLen-1-i] === bValues[bLen-1-i];
    if (stepsFromEnd === null && match) {
      stepsFromEnd = i;
    } else if (stepsFromEnd === null && !match) {
      return null;
    } else if (stepsFromEnd !== null && match) {
      stepsFromEnd = i;
    } else if (stepsFromEnd !== null && !match) {
      break;
    }
  }
  let startShorter = aLen - 1 - stepsFromEnd;
  let startLonger = bLen - 1 - stepsFromEnd;
  pA = headA;
  pB = headB;
  if (bLen < aLen) {
    startShorter = bLen - 1 - stepsFromEnd;
    startLonger = aLen - 1 - stepsFromEnd;
    pA = headB;
    pB = headA;
  }
  for (let i = 0; i < startShorter; i++) {
    pA = pA.next;
  }
  for (let i = 0; i < startLonger; i++) {
    pB = pB.next;
  }
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

/**
 * @param {number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const check = (input, correctAnswer) => {
  const response = getIntersectionNode(...input);
  console.log(response);
  console.log(correctAnswer);
  console.log('');
};

const start = new Date().getTime();

let a = new ListNode(0);
let b = a;
let output = new ListNode(0);
check(input=[a, b], correctAnswer=output);

a = new ListNode(0);
b = new ListNode(0);
output = null;
check(input=[a, b], correctAnswer=output);

a = new ListNode(0);
a.next = new ListNode(9);
a.next.next = new ListNode(1);
a.next.next.next = new ListNode(2);
a.next.next.next.next = new ListNode(4);
b = new ListNode(3);
b.next = a.next.next.next;
output = new ListNode(2);
output.next = new ListNode(4);
check(input=[a, b], correctAnswer=output);

a = new ListNode(2);
a.next = new ListNode(6);
a.next.next = new ListNode(4);
b = new ListNode(1);
b.next = new ListNode(5);
output = null;
check(input=[a, b], correctAnswer=output);

a = new ListNode(4);
a.next = new ListNode(1);
a.next.next = new ListNode(8);
a.next.next.next = new ListNode(4);
a.next.next.next.next = new ListNode(5);
b = new ListNode(5);
b.next = new ListNode(0);
b.next.next = new ListNode(1);
b.next.next.next = a.next.next;
output = new ListNode(8);
output.next = new ListNode(4);
output.next.next = new ListNode(5);
check(input=[a, b], correctAnswer=output);

a = new ListNode(3);
a.next = new ListNode(4);
a.next.next = new ListNode(5);
a.next.next.next = new ListNode(6);
a.next.next.next.next = new ListNode(7);
b = new ListNode(2);
b.next = a;
output = new ListNode(3);
output.next = new ListNode(4);
output.next.next = new ListNode(5);
output.next.next.next = new ListNode(6);
output.next.next.next.next = new ListNode(7);
check(input=[a, b], correctAnswer=output);

const stop = new Date().getTime();

console.log(stop - start);
