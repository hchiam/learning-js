class MinMaxHeap_2 {
  constructor(array, type) {
    this.type = type || "min";
    this.heap = this.buildHeap(array);
  }

  comparison(a, b) {
    if (this.type === "min") {
      return a < b;
    } else {
      return a > b;
    }
  }

  // time O(n), space O(1)
  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  // time O(log n), space O(1)
  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (
        childTwoIdx !== -1 &&
        this.comparison(heap[childTwoIdx], heap[childOneIdx])
      ) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (this.comparison(heap[idxToSwap], heap[currentIdx])) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  // time O(log n), space O(1)
  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      this.comparison(heap[currentIdx], heap[parentIdx])
    ) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  // time O(1), space O(1)
  peek() {
    return this.heap[0];
  }

  // time O(log n), space O(1)
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }

  pop() {
    return this.remove();
  }

  // time O(log n), space O(1)
  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }

  add(value) {
    this.insert(value);
  }

  push(value) {
    this.insert(value);
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }

  getSize() {
    return this.heap.length;
  }
}

module.exports = {
  MinMaxHeap_2,
};
