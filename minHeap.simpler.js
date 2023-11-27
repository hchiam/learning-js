function MinHeap(customSort) {
  this.heap = [];
  this.customSort = customSort;
}

MinHeap.prototype.add = function (value) {
  this.heap.push(value);
  if (this.customSort) {
    this.heap.sort((a, b) => this.customSort(b, a));
  } else {
    this.heap.sort((a, b) => b - a);
  }
};

MinHeap.prototype.pop = function () {
  return this.heap.pop();
};

module.exports = {
  MinHeap,
};
