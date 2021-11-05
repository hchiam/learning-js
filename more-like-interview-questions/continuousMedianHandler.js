// nodemon -x 'node continuousMedianHandler.js'

/*
BCR Ot(1), Os(1) seems possible, if you only need to read the median.
Just have at most 3 values stored:
	- left
	- right
	- imbalance state (median = left, median = right, median = btwn)
but what if you're just given all numbers in order?
	then you'd have to keep shifting the numbers
	and you would need to know previous values
so Ot(1), Os(n) seems to be the best we can do
but what about ordering? wouldn't that make insertions > Ot(1)?
	You'd have to sort: Ot(n log n) PER insert
Feasibly Ot(n) insert, Ot(1) getMedian, Os(n).
But can we do better? Yes.
Use (Doubly?) Linked Lists? Ot(n) per insert
Use min heaps: Ot(log n) per insert
So actually, realistically Ot(log n) insert, Ot(1) median, Os(n)
How to make the min heaps "balanced"? Track heights too.
*/

// Do not edit the class below except for
// the insert method. Feel free to add new
// properties and methods to the class.
class ContinuousMedianHandler {
  // uses a min heap and a max heap
  constructor() {
    // Os(n)
    this.median = null;
    this.maxHeap = new Heap("max"); // left side
    this.minHeap = new Heap("min"); // right side
  }

  insert(number) {
    // Ot(log n)
    // decide which heap to add to
    if (this.maxHeap.getSize() === 0 || number < this.maxHeap.top()) {
      this.maxHeap.add(number);
    } else if (this.minHeap.getSize() === 0) {
      if (number >= this.maxHeap.top()) {
        this.minHeap.add(number);
      } else {
        this.minHeap.add(this.maxHeap.pop());
        this.maxHeap.add(number);
      }
    } else if (this.maxHeap.getSize() === 0) {
      if (number <= this.minHeap.top()) {
        this.maxHeap.add(number);
      } else {
        this.maxHeap.add(this.minHeap.pop());
        this.minHeap.add(number);
      }
    } else if (number <= this.maxHeap.top()) {
      this.maxHeap.add(number);
    } else {
      this.minHeap.add(number);
    }

    // ensure max size diff of 1
    const diff = this.maxHeap.getSize() - this.minHeap.getSize();
    if (diff > 1) {
      this.minHeap.add(this.maxHeap.pop());
    } else if (diff < -1) {
      this.maxHeap.add(this.minHeap.pop());
    }

    // THEN update median
    this.median = this.getUpdatedMedian();
  }

  getUpdatedMedian() {
    if (this.maxHeap.getSize() === 0 && this.minHeap.getSize() === 0) {
      return null;
    } else if (this.maxHeap.getSize() === 0 || this.minHeap.getSize() === 0) {
      return this.maxHeap.top() ?? this.minHeap.top();
    } else if (this.maxHeap.getSize() === this.minHeap.getSize()) {
      return (this.maxHeap.top() + this.minHeap.top()) / 2;
    } else if (this.maxHeap.getSize() > this.minHeap.getSize()) {
      return this.maxHeap.top();
    } else if (this.maxHeap.getSize() < this.minHeap.getSize()) {
      return this.minHeap.top();
    }
    return null;
  }

  getMedian() {
    // Ot(1)
    return this.median;
  }
}

class Heap {
  constructor(type) {
    this.h = [];
    this.type = type; // 'max' or 'min'
    this.size = 0;
  }

  top() {
    return this.h[0];
  }

  getSize() {
    return this.size;
  }

  insert(val) {
    this.add(val);
  }

  add(val) {
    if (!this.h.length) {
      this.h = [val];
    } else {
      this.h.push(val);
      this.bubbleLastUp();
      // console.log(this.type, this.h);
    }
    this.size++;
  }

  bubbleLastUp() {
    if (!this.h.length) return;
    let i = this.h.length - 1;

    // 0 12 34 56 7,8,9,10 11,12,13,14
    while (i > 0) {
      let swapWith = i;
      if (i % 2 === 0) {
        // even: 6 -> 3-1 = 2 and 4 -> 2-1 = 1
        swapWith = i / 2 - 1;
      } else {
        // odd: 5 -> 4/2 = 2 and 3 -> 2/2 = 1
        swapWith = (i - 1) / 2;
      }

      let shouldSwap = false;
      if (this.type === "max") {
        shouldSwap = this.h[swapWith] < this.h[i];
      } else if (this.type === "min") {
        shouldSwap = this.h[swapWith] > this.h[i];
      }

      if (!shouldSwap) return;

      [this.h[i], this.h[swapWith]] = [this.h[swapWith], this.h[i]];
      i = swapWith;
    }
  }

  pop() {
    if (!this.h.length) return null;

    const output = this.top();
    console.log(1, this.type, this.h, output);
    // pop end of array
    const end = this.h.pop();
    // put it at top
    this.h[0] = end;
    // bubble down
    let i = 0;
    // 0 12 34 56
    console.log(2, this.type, this.h, "top = end");
    while (i < this.h.length) {
      let swapWith = i * 2;
      const left = swapWith + 1;
      const right = swapWith + 2;

      if (this.h[left] == undefined && this.h[right] == undefined) {
        break;
      }

      if (this.type === "max") {
        if (this.h[i] >= this.h[left] && this.h[i] >= this.h[right]) {
          // also works if both are undefined
          break;
        } else {
          if (this.h[left] === undefined || this.h[right] === undefined) {
            swapWith = this.h[left] !== undefined ? left : right;
            if (this.h[swapWith] > this.h[i]) {
              [this.h[swapWith], this.h[i]] = [this.h[i], this.h[swapWith]];
              i = swapWith;
            } else {
              break;
            }
          } else if (this.h[left] > this.h[right]) {
            // so that the one you swap with is also correct with respect to its previously-sibling
            // i.e. swap with the larger to guarantee correctness
            [this.h[left], this.h[i]] = [this.h[i], this.h[left]];
            i = left;
          } else if (this.h[right] > this.h[i]) {
            [this.h[right], this.h[i]] = [this.h[i], this.h[right]];
            i = right;
          } else {
            break;
          }
        }
      } else if (this.type === "min") {
        if (this.h[i] <= this.h[left] && this.h[i] <= this.h[right]) {
          // also works if both are undefined
          break;
        } else {
          if (this.h[left] === undefined || this.h[right] === undefined) {
            swapWith = this.h[left] !== undefined ? left : right;
            if (this.h[swapWith] < this.h[i]) {
              [this.h[swapWith], this.h[i]] = [this.h[i], this.h[swapWith]];
              i = swapWith;
            } else {
              break;
            }
          } else if (this.h[left] < this.h[right]) {
            // so that the one you swap with is also correct with respect to its previously-sibling
            // i.e. swap with the smaller to guarantee correctness
            [this.h[left], this.h[i]] = [this.h[i], this.h[left]];
            i = left;
          } else if (this.h[right] < this.h[i]) {
            [this.h[right], this.h[i]] = [this.h[i], this.h[right]];
            i = right;
          } else {
            break;
          }
        }

        // alternatively:

        // let j = i;
        // if (this.h[left] < this.h[j]) {
        //   j = left;
        // }
        // // not "else if" because you give it a chance to swap with one that preserves correctness with the sibling
        // if (this.h[right] < this.h[j]) {
        //   j = right;
        // }

        // if (j === i) {
        //   break;
        // } else {
        //   [this.h[j], this.h[i]] = [this.h[i], this.h[j]];
        //   i = j;
        // }
      }
    }

    console.log(3, this.type, this.h, "done\n");
    this.size--;
    return output;
  }
}

a = new ContinuousMedianHandler();
a.insert(5);
a.insert(10);
a.insert(100);
a.insert(200);
a.insert(6);
a.insert(13);
a.insert(14);
a.insert(50);
a.insert(51);
a.insert(52);
a.insert(1000);
// console.log(a.maxHeap);
// console.log(a.minHeap);
a.insert(10000);
a.insert(10001);
// console.log(a.getMedian());
a.insert(10002);
console.log("\n--------------\n");
console.log(a.maxHeap, "\n");
console.log(a.minHeap);
console.log(
  "\n-------FINAL ANSWER:",
  a.getMedian(),
  a.getMedian() === 51.5 ? "CORRECT! :)" : "wrong :(",
  "-------\n"
);

// m = new Heap("min");
// // [51, 200, 52, 10000, 100, 1000, 10001]
// [100, 200, 51, 52, 1000, 10000, 10001].forEach((x) => {
//   m.add(x);
// });

// console.log(m);

console.log("Checking that the min heaps are correctly updated:");

m = new Heap("min");
[10, 100, 200].forEach((x) => {
  m.add(x);
});
m.pop();

console.log(m);
console.log(JSON.stringify(m.h) === "[100,200]" ? "CORRECT! :)" : "wrong :(");
