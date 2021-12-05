/**
 * Assumes mono-directional singly-linked list.
 * 1) Fast = 2x steps, Slow = 1x steps. Wait for them to coincide.
 * 2) When they coincide, move one to the head node and move both at 1x steps.
 * 3) The re-coincide node is the cycle start.
 *
 * The coinciding always works: think of car blinkers always getting in and out of sync.
 * The overall algorithm works because of a math coincidence:
 * D = distance to loop start = what we want to get the cycle start node.
 * P = distance from loop start to coinciding fast/slow pointers.
 * T = total length of linked list.
 * R = remaining distance from coincidence to get back to start of loop.
 * Fast = 2D + 2P
 * Slow = D + P
 * T = 2D + 2P - P (draw it out: -P to remove the repeated part)
 * T = Slow + R
 * so 2D + 2P - P = Slow + R
 * so 2D + P = D + P + R
 * so D = R. Wow! so the remaining distance in loop = distance to loop start.
 */
function getLoopStart(head) {
  let slow = head;
  let fast = head;
  slow = slow.next;
  fast = fast.next.next;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // fast and slow concide now, so move both in 1-steps
  fast = head;
  while (slow !== fast) {
    slow = slow.next; // both go 1-steps!
    fast = fast.next; // 1-steps instead!
  }
  // fast === slow === cycle start node:
  return fast;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new LinkedListNode(1);
a.next = new LinkedListNode(2);
a.next.next = new LinkedListNode(3);
a.next.next.next = a;

console.log(getLoopStart(a) === a ? "OK" : "error");

a = new LinkedListNode(1);
a.next = new LinkedListNode(2);
a.next.next = a;

console.log(getLoopStart(a) === a ? "OK" : "error");

a = new LinkedListNode(1);
a.next = a;

console.log(getLoopStart(a) == a ? "OK" : "error");

a = new LinkedListNode(1);
a.next = new LinkedListNode(1);
a.next.next = new LinkedListNode(1);
let b = a.next.next;
a.next.next.next = new LinkedListNode(1);
a.next.next.next.next = b;

console.log(getLoopStart(a) == b ? "OK" : "error");
