/* eslint-disable require-jsdoc */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  if (head == null || head.next == null) return false;
  let slow = head;
  let fast = head;
  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);
a.next.next.next = a;

console.log(hasCycle(a) == true ? "OK" : "error");

a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = a;

console.log(hasCycle(a) == true ? "OK" : "error");

a = new ListNode(1);
a.next = new ListNode(2);
a.next.next = new ListNode(3);

console.log(hasCycle(a) == false ? "OK" : "error");

a = new ListNode(1);
a.next = a;

console.log(hasCycle(a) == true ? "OK" : "error");

a = new ListNode(1);

console.log(hasCycle(a) == false ? "OK" : "error");

a = null;

console.log(hasCycle(a) == false ? "OK" : "error");

a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(1);
a.next.next.next = new ListNode(1);

console.log(hasCycle(a) == false ? "OK" : "error");

a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(1);
a.next.next.next = new ListNode(1);
a.next.next.next.next = new ListNode(1);

console.log(hasCycle(a) == false ? "OK" : "error");

a = new ListNode(1);
a.next = new ListNode(1);
a.next.next = new ListNode(1);
a.next.next.next = new ListNode(1);
a.next.next.next.next = a;

console.log(hasCycle(a) == true ? "OK" : "error");
