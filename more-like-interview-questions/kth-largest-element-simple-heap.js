const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/* references: 

https://leetcode.com/problems/kth-largest-element-in-a-stream/discuss/1328108/JavaScript-13-lines-heap-solution-(7643)

https://support.leetcode.com/hc/en-us/articles/360011833974-What-are-the-environments-for-the-programming-languages-

https://github.com/datastructures-js/priority-queue

*/

var KthLargest = function (k, nums) {
  this.k = k;

  // Set up a min "heap" of the k max numbers (k largest),
  // so that way you can easily get the lowest = kth largest:
  this.pqAsHeap = new MinPriorityQueue();
  nums.forEach((num) => this.pqAsHeap.enqueue(num)); // heapify them all
  while (this.pqAsHeap.size() > k) this.pqAsHeap.dequeue(); // keep just the top k
};

KthLargest.prototype.add = function (val) {
  this.pqAsHeap.enqueue(val);
  if (this.pqAsHeap.size() > this.k) this.pqAsHeap.dequeue(); // maintain top k
  return this.pqAsHeap.front().element; // top of heap = front of priority queue
};

let test = new KthLargest(3, [4, 5, 8, 2]);
let tests = [
  { given: 3, expect: 4 },
  { given: 5, expect: 5 },
  { given: 10, expect: 5 },
  { given: 9, expect: 8 },
  { given: 4, expect: 8 },
];
tests.forEach((t) => console.log(test.add(t.given) === t.expect));

test = new KthLargest(3, [5, -1]);
tests = [
  { given: 2, expect: -1 },
  { given: 1, expect: 1 },
  { given: -1, expect: 1 },
  { given: 3, expect: 2 },
  { given: 4, expect: 3 },
];
tests.forEach((t) => console.log(test.add(t.given) === t.expect));

test = new KthLargest(1, []);
tests = [
  { given: -3, expect: -3 },
  { given: -2, expect: -2 },
  { given: -4, expect: -2 },
  { given: 0, expect: 0 },
  { given: 4, expect: 4 },
];
tests.forEach((t) => console.log(test.add(t.given) === t.expect));
