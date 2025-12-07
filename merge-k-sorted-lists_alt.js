const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// https://leetcode.com/problems/merge-k-sorted-lists

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
- i think remember i need to use a min heap but also track what list it was taken from
    - min heap of 1 head from each LL and which list was from
    - use min heap front to get min and know which LL to re-fill heap
- and i think i remember MinPriorityQueue can be used in LeetCode
    - enqueue(num) dequeue() size() front().element
- but for now, just merge all lists into one heap and let the heap output the next min
  - time O(n log n) space O(n)
- if extra time, try to make the heap always only have k elements
  - time O(n log k) space O(n)
- if extra time, try to slightly reduce space - not creating new nodes
  - time O(n log k) space O(1)
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists_alt = function (lists) {
  if (!lists || !lists.length) return null;
  const heap = new MinPriorityQueue();
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      heap.enqueue(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  const top = heap.dequeue();
  if (!top) return null;
  const output = new ListNode(top);
  let pointer = output;
  while (heap.size()) {
    const top = heap.dequeue();
    pointer.next = new ListNode(top);
    pointer = pointer.next;
  }
  return output;
};

module.exports = {
  mergeKLists_alt,
};
