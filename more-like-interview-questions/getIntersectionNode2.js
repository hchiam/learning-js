// nodemon -x 'npm run lint; node index.js'

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * space complexity of O(1)
 * time complexity of O(m + n) like my other solution,
 * but this one tested on leetcode seems a lot slower
 */
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;
  let pA = headA;
  let pB = headB;
  let lastA = null;
  let lastB = null;
  while (pA) {
    lastA = pA;
    pA = pA.next;
  }
  while (pB) {
    lastB = pB;
    pB = pB.next;
  }
  const neverIntersect = (lastA !== lastB);
  if (neverIntersect) return null;
  pA = headA;
  pB = headB;
  while (true) {
    if (pA === pB) return pA;
    pA = pA.next;
    if (pA === null) {
      pA = headA;
    }
    pB = pB.next;
    if (pB === null) {
      pB = headB;
    }
  }
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
