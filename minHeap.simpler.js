function MinHeap() {
  this.heap = [];
}

MinHeap.prototype.add = function (value) {
  this.heap.push(value);
  this.heap.sort((a, b) => b - a);
};

MinHeap.prototype.pop = function () {
  return this.heap.pop();
};

module.exports = {
  MinHeap,
};
