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
  const LLs = ignoreEmptyLLs(lists);
  push1FromEachLL(heap, LLs);
  let newLL = heap.pop();
  if (!newLL) return newLL;
  let pointer = newLL;
  push1FromEachLL(heap, LLs);
  while (!heap.isEmpty()) {
    const node = heap.pop();
    pointer.next = node;
    pointer = pointer.next;
    push1FromEachLL(heap, LLs);
  }
  return newLL;
};

function push1FromEachLL(heap, LLs) {
  for (let i = 0; i < LLs.length; i++) {
    // ideally get only 1 node from the LL you recently got the heap top from: time O(n log k)
    let node = LLs[i];
    if (node) {
      // just get one from each list, instead of while (node)
      heap.push(node.val);
      LLs[i] = LLs[i].next; // node = node.next won't update the LLs
    }
  }
}

function Heap() {
  const heap = new MinPriorityQueue();
  function push(item, kthList) {
    heap.enqueue(item); // can't use kthList?
  }
  function pop() {
    const val = heap.dequeue();
    if (!val) return null;
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

function ignoreEmptyLLs(lists) {
  return lists.filter((list) => list);
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
