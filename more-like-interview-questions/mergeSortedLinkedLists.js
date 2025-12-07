/**
 * If you aren't allowed to create a new LL for some reason,
 * and both input linked lists are sorted:
 * time O(n + m), space O(1).
 *
 * Also consider edge cases:
 * - head
 * - tail
 * - still have nodes in the p1/p2 list
 */
function mergeSortedLinkedLists(headOne, headTwo) {
  const isHeadOneLower = headOne.value <= headTwo.value;
  const lowerHead = isHeadOneLower ? headOne : headTwo;
  let p1 = isHeadOneLower ? headOne : headTwo;
  let p2 = isHeadOneLower ? headTwo : headOne;
  /*
	1-3-4-5-9-10
	|

	2-6-7-8
	|
	*/
  while (p2) {
    // have anything to insert
    let next = p1.next;
    while (next?.value <= p2.value) {
      // compare with p1’s next so p1 <= p2 so p2 can be inserted after p1:
      p1 = next;
      next = next.next;
    }

    // still guaranteed p1 <= p2: (since while loop was on p1.next)
    p1.next = p2;

    // reattach tail after inserted node:
    p1 = p2;
    p2 = p2.next; // DON'T advance p2 last!
    p1.next = next;
  }
  return lowerHead;
}

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function getSerializedOutput(node) {
  let output = [];
  while (node) {
    output.push(node.value);
    node = node.next;
  }
  return output.join("-");
}

module.exports = {
  mergeSortedLinkedLists,
  LinkedListNode,
  getSerializedOutput,
};
