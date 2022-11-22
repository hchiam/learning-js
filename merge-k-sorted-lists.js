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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
I recognize this as a classic pattern.
Use a min heap that stores the top nodes, but each node in the min heap
also tracks which linked list it came from, to ensure proper selection of which 
linked list to get the next node to add to the min heap,
which ensures that the min heap has only 1 of each linked list in the heap?
Or push from all non-empty lists after each round?
*/
var mergeKLists = function (lists) {
  const heap = new Heap();
  for (let i = 0; i < lists.length; i++) {
    let list = lists[i];
    let node = list;
    while (node) {
      heap.push(node.val);
      list = list.next;
      node = node.next;
    }
  }
  let newLL = heap.pop();
  if (!newLL) return newLL;
  let pointer = newLL;
  while (!heap.isEmpty()) {
    const node = heap.pop();
    pointer.next = node;
    pointer = pointer.next;
  }
  return newLL;
};

function Heap() {
  const heap = new MinPriorityQueue();
  function push(item, kthList) {
    heap.enqueue(item); // can't use kthList?
  }
  function pop() {
    const node = heap.dequeue();
    if (!node) return null;
    const val = node.element;
    return new ListNode(val);
  }
  function isEmpty() {
    return heap.size() === 0;
  }
  return {
    heap,
    push,
    pop,
    isEmpty,
  };
}

function generateLLFromArray(array) {
  if (!array || !array.length) return null;
  const LL = new ListNode(array[0]);
  let pointer = LL;
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    pointer.next = new ListNode(element);
    pointer = pointer.next;
  }
  return LL;
}

module.exports = {
  ListNode,
  mergeKLists,
  generateLLFromArray,
};
