/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
ideas:
1) merge and sort: Ot(n log n) Os(n) or Os(1) technically
2) min heap and pop: Ot(n log k) Os(k) or Os(1) technically
3) we could merge and heapify in Ot(n) so then Ot(n) overall https://stackoverflow.com/questions/9755721/how-can-building-a-heap-be-on-time-complexity

for practice, i'll stick to 2)
*/
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter(Boolean);
  const heap = new MinPriorityQueue();
  const preHead = new ListNode();
  const pointers = {}; // hash table for fast access
  let pointersSize = lists.length;
  for (let i in lists) {
    const list = lists[i];
    list.i = i;
    pointers[i] = list;
  }
  let p = preHead;
  for (let i in lists.filter(Boolean)) {
    const list = lists[i];
    heap.enqueue(list, list.val);
  }
  while (pointersSize > 0) {
    const next = heap.dequeue().element;
    const i = String(next.i);
    p.next = next;
    p = p.next;
    if (pointers[i].next) {
      // if that list's not null, proceed with .next and enqueue
      pointers[i] = pointers[i].next;
      pointers[i].i = i;
      heap.enqueue(pointers[i], pointers[i].val);
    } else {
      // else remove list from pointers + (find another to enqueue)?
      delete pointers[i];
      pointersSize -= 1;
    }
  }
  return preHead.next;
};
