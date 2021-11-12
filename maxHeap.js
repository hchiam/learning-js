// Code based on: https://codepen.io/beaucarnes/pen/JNvENQ?editors=0010

// this is not completely correct logic for bubble down - see continuousMedianHandler.js
// to pass more test cases

/* eslint-disable no-unused-vars */

// left child: i * 2
// right child: i * 2 + 1
// parent: i / 2

const MaxHeap = function () {
  const heap = [null]; // start indices at 1 instead of at 0, for simpler math

  this.print = () => heap;

  this.insert = function (num) {
    // add to last index and bubble up (left)

    heap.push(num);
    // bubble up:
    if (heap.length > 2) {
      let i = heap.length - 1;
      // while child > parent:
      while (heap[i] > heap[Math.floor(i / 2)]) {
        // continue until and including if child of top of heap:
        if (i > 1) {
          // swap parent and child:
          [heap[Math.floor(i / 2)], heap[i]] = [
            heap[i],
            heap[Math.floor(i / 2)],
          ];
          // update next i to check as long as the swapped parent wasn't already the top of the heap:
          if (Math.floor(i / 2) > 1) {
            i = Math.floor(i / 2);
          } else {
            break;
          }
        }
      }
    }
  };

  this.remove = function () {
    // move last index the top and bubble down (right)

    const largest = heap[1];
    if (heap.length < 2) {
      // last one since index 0 = null
      return null;
    } else if (heap.length == 2) {
      // keep one more
      heap.splice(1, 1);
      return largest;
    } else if (heap.length > 2) {
      // move last to top:
      heap[1] = heap[heap.length - 1];
      heap.splice(heap.length - 1);
      // trivial case:
      if (heap.length == 3) {
        if (heap[1] < heap[2]) {
          [heap[1], heap[2]] = [heap[2], heap[1]];
        }
        return largest;
      }
      // bubble down:
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while (heap[i] <= heap[left] || heap[i] <= heap[right]) {
        if (heap[left] > heap[right]) {
          [heap[i], heap[left]] = [heap[left], heap[i]];
          i = 2 * i;
        } else {
          [heap[i], heap[right]] = [heap[right], heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if (heap[left] == undefined || heap[right] == undefined) {
          // this is not completely correct logic - see continuousMedianHandler.js
          // you need to possibly swap with the child with a value
          break;
        }
      }
      return largest;
    }
  };

  this.sort = function () {
    const result = [];
    while (heap.length > 1) {
      result.push(this.remove());
    }
    return result;
  };
};
