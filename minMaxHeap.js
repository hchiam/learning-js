// a cleaner version of minHeap.js and maxHeap.js and the Heap in more-like-interview-questions/continuousMedianHandler.js

const Heap = function (type) {
  this.type = type;
  this.h = []; // Os(n)
  this.needToHeapify =
    type === "min"
      ? (parent, child) => this.h[parent] > this.h[child] // bad for min heap
      : (parent, child) => this.h[parent] < this.h[child]; // bad for max heap
};

// you might think buildHeap() might take Ot(n log n), but it's actually Ot(n)
// because bubbleDown for lower nodes are smaller and more abundant
// and also some math with Taylor series converges on n

Heap.prototype.add = function (value) {
  this.h.push(value);
  this.bubbleUp(); // Ot(log n)
};

Heap.prototype.push = function (value) {
  this.add(value); // Ot(log n)
};

Heap.prototype.pop = function () {
  if (!this.h.length) return;
  this.swap(0, this.h.length - 1);
  const previousTop = this.h.pop(); // must do this after swap, and before bubbleDown
  this.bubbleDown(); // Ot(log n)
  return previousTop;
};

Heap.prototype.top = function () {
  // Ot(1)
  return this.h[0];
};

Heap.prototype.getSize = function () {
  // Ot(1)
  return this.h.length;
};

Heap.prototype.swap = function (i, j) {
  // Ot(1)
  [this.h[i], this.h[j]] = [this.h[j], this.h[i]];
};

Heap.prototype.bubbleUp = function () {
  // Ot(log n)
  if (!this.h.length) return;
  let i = this.h.length - 1;
  let parentIndex = Math.floor((i - 1) / 2); // 0 12 34 56
  while (parentIndex > -1 && this.needToHeapify(parentIndex, i)) {
    this.swap(i, parentIndex);
    i = parentIndex;
    parentIndex = Math.floor((i - 1) / 2);
  }
};

Heap.prototype.bubbleDown = function () {
  // Ot(log n)
  if (!this.h.length) return;
  let i = 0;
  let leftChildIndex = i * 2 + 1; // 0 12 34 56
  let rightChildIndex = i * 2 + 2;
  while (leftChildIndex < this.h.length) {
    let indexToSwapWith = i;

    const haveLeft = this.h[leftChildIndex] !== undefined;
    const haveRight = this.h[rightChildIndex] !== undefined;

    const haveLeftSmaller =
      (haveLeft && !haveRight) ||
      this.needToHeapify(rightChildIndex, leftChildIndex);
    // this.h[leftChildIndex] <= this.h[rightChildIndex];

    const haveRightSmaller =
      (!haveLeft && haveRight) ||
      this.needToHeapify(leftChildIndex, rightChildIndex);
    // this.h[rightChildIndex] <= this.h[leftChildIndex];

    if (haveLeftSmaller) {
      indexToSwapWith = leftChildIndex;
    } else if (haveRightSmaller) {
      indexToSwapWith = rightChildIndex;
    } else {
      break;
    }

    this.swap(i, indexToSwapWith);

    i = indexToSwapWith;
    leftChildIndex = i * 2 + 1;
    rightChildIndex = i * 2 + 2;
  }
};

module.exports = {
  Heap,
};
