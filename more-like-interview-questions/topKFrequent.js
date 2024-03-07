/* eslint-disable require-jsdoc */

// https://leetcode.com/problems/top-k-frequent-elements/

/**
 * better than Ot(n log n) means you can't use min heap
 * need Ot(n) --> HT of frequencies: HT x a few loops = Ot(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    const freqsHT = {}; // { num: freq }
    for (let num of nums) {
        freqsHT[num] = num in freqsHT ? freqsHT[num] + 1 : 1;
    }
    const temp = [];
    for (let [num, freq] of Object.entries(freqsHT)) {
        temp[freq] = num;
    }
    let i = k;
    let t = temp.length - 1;
    const output = [];
    while (i > 0 && t >= 0) {
        if (typeof temp[t] !== 'undefined') {
            output.push(temp[t]);
            i--;
        }
        t--;
    }
    return output;
};

/**
// this solution uses a slightly modified version of heap from
// https://gist.github.com/tpae/54ec7371f947505967a2036b9c002428
 * tricky bits:
 *  - clone to avoid object reference problems
 *  - check if this.data[someIndex] exists before compare .freq
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent_MINHEAPSOLUTION = function(nums, k) {
  // assumes k is valid
  if (nums.length === 1) return [nums[0]];
  const ht = {};
  const heap = new MinHeap();
  for (const num of nums) {
    if (num in ht) {
      ht[num]++;
    } else {
      ht[num] = 1;
    }
  }
  // eslint-disable-next-line guard-for-in
  for (const [num, freq] of Object.entries(ht)) {
    if (ht.hasOwnProperty(num)) {
      heap.insert(parseInt(num), parseInt(freq));
      if (heap.size() > k) heap.pop();
    }
  }
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(heap.extractMin().num);
  }
  return output;
};

function clone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function MinHeap() {
  this.data = [];
}

MinHeap.prototype.size = function() {
  return this.data.length;
};

MinHeap.prototype.insert = function(num, freq) {
  this.data.push({num, freq});
  this.bubbleUp(this.data.length-1);
};

MinHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
  // get the parent
    const parent = Math.floor((index + 1) / 2) - 1;

    // if parent is greater than child
    if (this.data[parent] && this.data[index] &&
      this.data[parent].freq > this.data[index].freq) {
      // swap
      const temp = clone(this.data[parent]);
      this.data[parent] = clone(this.data[index]);
      this.data[index] = clone(temp);
    }

    index = parent;
  }
};
MinHeap.prototype.extractMin = function() {
  const min = this.data[0];

  // set first element to last element
  this.data[0] = clone(this.data.pop());

  // call bubble down
  this.bubbleDown(0);

  return min;
};

MinHeap.prototype.pop = function() {
  return this.extractMin();
};

MinHeap.prototype.bubbleDown = function(index) {
  while (true) {
    const child = (index+1)*2;
    const sibling = child - 1;
    let toSwap = null;

    // if current is greater than child
    if (this.data[index] && this.data[child] &&
      this.data[index].freq > this.data[child].freq) {
      toSwap = child;
    }

    // if sibling is smaller than child, but also smaller than current
    if (this.data[index] && this.data[sibling] &&
      this.data[index].freq > this.data[sibling].freq &&
      (this.data[child] == null || (this.data[child] !== null &&
        this.data[sibling] &&
        this.data[sibling].freq < this.data[child].freq))) {
      toSwap = sibling;
    }

    // if we don't need to swap, then break.
    if (toSwap == null) {
      break;
    }

    const temp = clone(this.data[toSwap]);
    this.data[toSwap] = clone(this.data[index]);
    this.data[index] = clone(temp);

    index = toSwap;
  }
};

function solutionWrapper(...parameters) {
  return topKFrequent(...parameters).sort();
}

module.exports = {
  solutionWrapper,
};
