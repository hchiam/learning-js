const debug = false;
console.log(heapSort([8, 5, 2, 9, 5, 6, 3]).join(","));
console.log(heapSort([1, 2, 3]).join(","));
console.log(heapSort([2, -3, -2, -3, 1]).join(","));

/**
heap sort can technically be done in time O(n log n) space O(1)
if done in-place with the left side being a max heap
and the right side a growing list of sorted maxes start from the right.

loop between:
- heapify (up to before the last sorted index)
- max to end swap
*/
function heapSort(array) {
  if (!array.length) return array;
  let end = array.length - 1;
  heapify(array);
  if (debug) console.log(array.join(","), "heapified");
  while (end >= 0) {
    bubbleDown(array, 0, end + 1);
    swap(array, 0, end);
    if (debug)
      console.log(array.join(","), "swap", 0, end, array[end], array[0]);
    end--;
  }
  return array;
}

function heapify(array) {
  if (!array.length) return;
  // bubble down starting from the nodes at the bottom of the heap
  // why from bottom?
  // if from top: 1-2-3 -> 2-1-3 -> 2-3-1 = wrong
  // if from bottom: 1-2-3 -> 1-3-2 -> 3-1-2 3-2-1 = right
  for (let i = array.length - 1; i >= 0; i--) {
    bubbleDown(array, i, array.length);
  }
}

function swap(array, i = 0, endIndexToSwapWith) {
  // for heap: swap first (top max heap = max) with last (build up sorted right end):
  // otherwise swap index with index to bubble down:
  [array[i], array[endIndexToSwapWith]] = [array[endIndexToSwapWith], array[i]];
}

function bubbleDown(array, i = 0, lastIndexToExclude) {
  // technically max bubbleDown:
  if (debug) console.log("bubbleDown");
  while (i < lastIndexToExclude) {
    // not <= because you can't bubble past it
    const iL = left(i);
    const iR = right(i);
    const L = iL < lastIndexToExclude ? array[iL] : -Infinity;
    const R = iR < lastIndexToExclude ? array[iR] : -Infinity;
    if (array[i] >= L && array[i] >= R) {
      break;
    }
    const biggerChild = L >= R ? L : R;
    const biggerChildIndex = L >= R ? iL : iR;
    if (biggerChild > array[i]) {
      swap(array, i, biggerChildIndex);
      i = biggerChildIndex;
    }
    if (debug) console.log(array.join(","));
  }
}

// 0 12 34 56
function left(i) {
  return i * 2 + 1;
}
function right(i) {
  return i * 2 + 2;
}

/*
console.log(heapSort([8,5,2,9,5,6,3]));

0123456
8529563 (end = 6)
8569523 (2->6)
8965523 (5->9)
9865523 (8->9)
heapify done

try to bubbleDown (can't - already heapified)
3865529 swapped
end = 5

bubbleDown:
836552 9
856352 9
256358 9 swapped
end = 4

bubbleDown:
65235 89
55236 89 swapped
end = 3

bubbleDown:
5523 689 (can't bubble down)
3525 689 swapped
end = 2

bubbleDown:
532 5689
235 5689 swapped
end = 1

bubbleDown:
32 55689
23 55689 swapped
end = 0

bubbleDown:
2 355689 (can't bubble down)
2 355689 (can't swap)
end = -1

2355689

     0
  1     2
 3 4   5 6
78 90 12 34


    8
  5   2
 9 5 6 3
*/
